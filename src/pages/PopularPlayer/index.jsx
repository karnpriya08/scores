import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlayerData } from "../../Redux/action";
import Table from "../../component/Tabel";


function index() {
  const { PlayerData } = useSelector((state) => ({
    PlayerData: state.PlayerData || [],
  }));

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPlayerData());
  }, [dispatch]);


  return <div className="m-4" >
    <h1 className="text-center   text-red-400 p-2 text-4xl">Player Table</h1>
    <Table PlayerData={PlayerData} /></div>;
}
export default index;