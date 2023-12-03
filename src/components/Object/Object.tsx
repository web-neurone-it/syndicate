import React, { Suspense, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bus from "../../objects/Bus";
import Sedan from "../../objects/Sedan";
import Hatchback from "../../objects/Hatchback";
import Jeep from "../../objects/Jeep";
import classes from "../../scss/Object.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectCar, basketAppend } from "../../store/reducers/ActionCreators";
import UIButton from "../../UIKit/UIButton";
import { FaPlus } from "react-icons/fa";

const Object = () => {
  const [current, setCurrent] = useState<number>(0);
  const dispatch = useAppDispatch();

  const clickHandler = (i: string, index: number) => {
    setCurrent(index);
    dispatch(selectCar(i));
  };
  const { selectedService, selectedCar, selectedParts } = useAppSelector(
    (state) => state.basketReducer
  );
  return (
    <>
      <div className={classes["Object"]}>
        <div className={classes["Object__selected"]}>
          <div className={classes["Object__selected-title"]}>
            {" "}
            <br /> Выбрано:
          </div>
          <div className={classes["Object__selected-item"]}>
            Тип кузова: <div> {selectedCar} </div>
          </div>
          <div className={classes["Object__selected-item"]}>
            Услуга: <div>{selectedService} </div>
          </div>
          <div className={classes["Object__selected-item"]}>
            Детали: <div>{selectedParts.join(", ")} </div>
          </div>
          <div className={classes["Object__selected-item-button"]}>
            <UIButton type={"outline"} onClick={() => dispatch(basketAppend())}>
              <FaPlus /> Добавить в корзину
            </UIButton>
          </div>
          <div className={classes["Object__selected-item-hint"]}>
            <span>
              <br />
              <b>Соберите ваш пакет услуг:</b> <br /> <br />
              1. Выберите услугу из дерева услуг.
              <br />
              2. Выберите ваш тип кузова. <br />
              3. Вращайте 3D модель автомобиля, двойным кликом выберите нужную
              часть/части авто.
            </span>
          </div>
        </div>
        <div className={classes["Object__item"]}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [5, 50, 30], fov: 3 }}
          >
            <ambientLight intensity={0.3} />
            <spotLight
              intensity={0.3}
              angle={0.1}
              penumbra={1}
              position={[5, 25, 20]}
            />
            <Suspense fallback={null}>
              {current === 0 && <Sedan dispatch={dispatch} />}
              {current === 1 && <Hatchback dispatch={dispatch} />}
              {current === 2 && <Jeep dispatch={dispatch} />}
              {current === 3 && <Bus dispatch={dispatch} />}
              <Environment preset="city" />
            </Suspense>

            <OrbitControls
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={true}
              enablePan={true}
              target={[0, 1, 0]}
            />
          </Canvas>
        </div>
        <div className={classes["Object__nav"]}>
          {["Седан", "Хетчбэк", "Джип", "Микроавтобус"].map((i, index) => (
            <p
              onClick={() => clickHandler(i, index)}
              key={index}
              className={
                index === current
                  ? classes["Object__nav-item"] + " " + classes["active"]
                  : classes["Object__nav-item"]
              }
            >
              &nbsp; &nbsp;{i}&nbsp; &nbsp;
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Object;
