import React from 'react';
import CustomTreeItem from "./CustomTreeItem";
import classes from '../../scss/ServiceList.module.scss'


const ServicesList = () => {
    return (
        <div className={classes['ServiceList']}>
            <CustomTreeItem nodeId="2" label="Кузов">
                <CustomTreeItem nodeId="3" label="Пленки">
                    <CustomTreeItem nodeId="4" label="Антихром">
                        <CustomTreeItem nodeId="5" label="Частичный пакет" />
                        <CustomTreeItem nodeId="6" label="Полный пакет" />
                    </CustomTreeItem>
                    <CustomTreeItem nodeId="7" label="Антигравийная">
                        <CustomTreeItem nodeId="8" label="Полная" />
                        <CustomTreeItem nodeId="9" label="Зоны риска" />
                    </CustomTreeItem>
                    <CustomTreeItem nodeId="10" label="Винил">
                        <CustomTreeItem nodeId="11" label="Частичная оклейка" />
                        <CustomTreeItem nodeId="12" label="Полная оклейка" />
                    </CustomTreeItem>
                    <CustomTreeItem nodeId="13" label="Тонировка" />
                    <CustomTreeItem nodeId="14" label="Бронирование лобового стекла" />
                </CustomTreeItem>
                <CustomTreeItem nodeId="15" label="Полировка">
                    <CustomTreeItem nodeId="16" label="Предпродажная" />
                    <CustomTreeItem nodeId="17" label="Детейлинг" />
                </CustomTreeItem>
                <CustomTreeItem nodeId="18" label="Защитное покрытие">
                    <CustomTreeItem nodeId="19" label="Керамика" />
                    <CustomTreeItem nodeId="20" label="Жидкое стекло" />
                    <CustomTreeItem nodeId="21" label="Антидождь" />
                    <CustomTreeItem nodeId="22" label="Диски" />
                </CustomTreeItem>
                <CustomTreeItem nodeId="23" label="Дооснащение">
                    <CustomTreeItem nodeId="24" label="Тюнинг оптики" />
                    <CustomTreeItem nodeId="25" label="Доводчики" />
                    <CustomTreeItem nodeId="26" label="Ветровики" />
                    <CustomTreeItem nodeId="27" label="Автосигнализация" />
                </CustomTreeItem>
            </CustomTreeItem>

            <CustomTreeItem nodeId="28" label="Салон">
                <CustomTreeItem nodeId="29" label="Химчистка"/>
                <CustomTreeItem nodeId="30" label="Пленки">
                    <CustomTreeItem nodeId="31" label="Ковролин"/>
                    <CustomTreeItem nodeId="32" label="Оклейка багажника"/>
                </CustomTreeItem>
                <CustomTreeItem nodeId="33" label="Чистка и защита кожи">
                    <CustomTreeItem nodeId="34" label="Керамика сидений и дверных карт"/>
                    <CustomTreeItem nodeId="35" label="Чистка кожи"/>
                </CustomTreeItem>
                <CustomTreeItem nodeId="36" label="Шумоизоляция"/>
            </CustomTreeItem>
        </div>
    );
};

export default ServicesList;