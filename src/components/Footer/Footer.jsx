import React from "react";
import { appStore, googlePlay } from "../../constantas";

const Footer = () => {
  return (
    <div className="mt-10">
      <ul className="flex justify-between">
        <div className="">
          <li className=" font-medium">О нас</li>
          <li>Пункты выдачи</li>
          <li>Вакансии</li>
        </div>

        <div className="">
          <li className=" font-medium">Пользователям</li>
          <li>Связаться с нами</li>
          <li>Вопрос - Ответ</li>
        </div>

        <div className="">
          <li className=" font-medium">Для предпринимателей</li>
          <li>Продавайте на Uzum</li>
          <li>Вход для продавцов</li>
        </div>

        <div className="">
          <li className="font-medium">Скачать приложение</li>

   
        </div>
      </ul>
    </div>
  );
};

export default Footer;
