import React, { useEffect, useState } from "react";
import axios from "../service";
import Map from "../components/Map";
import { Task as AddTask } from "../components/Forms";

function Home() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    tasks.length === 0 && fetchData();
  }, [tasks]);

  const fetchData = async () => {
    try {
      const { data } = await axios("/data.json");

      setTasks(data.tasks);

      console.log({ data });
    } catch (ex) {
      console.error({ ex });
    }
  };

  const getLocation = (e) => {
    // console.log({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    setTask({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  console.log({ tasks });

  const submit = (data) => {
    setTasks([...tasks, { id: 0, ...task }]);
    setTask({});
  };

  return (
    <>
      <AddTask
        submit={submit}
        className={Object.keys(task).length > 0 ? "open" : ""}
      />
      <Map getLocation={getLocation} tasks={tasks} />
    </>
  );
}

export default Home;
