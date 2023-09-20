import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAsteroids } from "../../store/asteroids/asteroidsSlice";

const Asteroids = () => {
  const dispatch = useAppDispatch();
  const asteroids = useAppSelector((state) => state.asteroids.arr);
  const status = useAppSelector((state) => state.asteroids.status);

  useEffect(() => {
    dispatch(fetchAsteroids("2023-09-10"));
  }, [dispatch]);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "rejected") {
    return <div>Error fetching asteroids data.</div>;
  }

  return (
    <div>
      {asteroids.map((el) => {
        return (
          <div key={el.id}>
            {el.absolute_magnitude_h}
            {el.absolute_magnitude_h}
            {el.absolute_magnitude_h}
            {el.absolute_magnitude_h}
            {el.absolute_magnitude_h}
            {el.absolute_magnitude_h}
            {el.absolute_magnitude_h} {el.absolute_magnitude_h}
          </div>
        );
      })}
    </div>
  );
};

export default Asteroids;