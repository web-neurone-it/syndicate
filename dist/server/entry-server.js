import * as jsxRuntime from "react/jsx-runtime";
import ReactDOM from "react-dom/server";
import { useDispatch, useSelector, Provider } from "react-redux";
import { useState, useEffect, useRef, Suspense } from "react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaYoutube, FaPhoneAlt, FaShare, FaMapMarkerAlt, FaHeadset, FaRegTimesCircle, FaTelegram, FaAngleDown, FaAngleRight, FaCompressAlt, FaTimes, FaArrowLeft, FaTrash, FaPaperPlane, FaShoppingCart, FaPlus } from "react-icons/fa";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y, EffectCreative } from "swiper";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import TreeView from "@mui/lab/TreeView";
import { styled } from "@mui/material/styles";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import { useSpring, animated } from "react-spring";
import Collapse from "@mui/material/Collapse";
import { Transition } from "react-transition-group";
import disableScroll from "disable-scroll";
import InputMask from "react-input-mask";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Layout$1 = "_Layout_dslh8_1";
const classes$k = {
  Layout: Layout$1
};
const Layout = (props) => {
  return /* @__PURE__ */ jsx("div", { className: classes$k["Layout"], children: props.children });
};
const Header$1 = "_Header_br7no_4";
const Header__links = "_Header__links_br7no_13";
const Header__nav = "_Header__nav_br7no_43";
const classes$j = {
  Header: Header$1,
  Header__links,
  "Header__links-intro": "_Header__links-intro_br7no_19",
  "Header__links-intro-logo": "_Header__links-intro-logo_br7no_24",
  "Header__links-intro-links": "_Header__links-intro-links_br7no_30",
  "Header__links-phones": "_Header__links-phones_br7no_35",
  Header__nav,
  "Header__nav-container": "_Header__nav-container_br7no_48",
  "Header__nav-address": "_Header__nav-address_br7no_75"
};
const logo = "/assets/logo-9fb5a6fd.webp";
const logoName = "/assets/logoName-78832224.webp";
const UIText$1 = "_UIText_c8rd2_4";
const solid$1 = "_solid_c8rd2_12";
const primary$1 = "_primary_c8rd2_19";
const classes$i = {
  UIText: UIText$1,
  solid: solid$1,
  primary: primary$1
};
const UIText = (props) => {
  const cls = [classes$i["UIText"], classes$i[props.type]];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cls.join(" "),
      onClick: (e) => {
        props.onClick && props.onClick(e);
      },
      children: props.children
    }
  );
};
const UIButton$1 = "_UIButton_1ya2l_4";
const primary = "_primary_1ya2l_21";
const outline = "_outline_1ya2l_25";
const solid = "_solid_1ya2l_32";
const classes$h = {
  UIButton: UIButton$1,
  primary,
  outline,
  solid
};
const UIButton = (props) => {
  const cls = [classes$h["UIButton"], classes$h[props.type]];
  return /* @__PURE__ */ jsxs("div", { className: cls.join(" "), onClick: props.onClick, children: [
    " ",
    props.children,
    "  "
  ] });
};
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;
const initialState$4 = {
  reviews: [],
  isFetchingLoading: false,
  error: "",
  success: ""
};
const reviewSlice = createSlice({
  name: "review",
  initialState: initialState$4,
  reducers: {
    reviewsFetching(state) {
      state.isFetchingLoading = true;
    },
    reviewsFetchingSuccess(state, action) {
      state.isFetchingLoading = false;
      state.reviews = action.payload;
    },
    reviewsFetchingError(state, action) {
      state.isFetchingLoading = false;
      state.error = action.payload;
    }
  }
});
const reviewReducer = reviewSlice.reducer;
const initialState$3 = {
  offer: { title: "", name: "", phone: "", service: "" },
  offerLoading: false,
  consultationLoading: false,
  offerError: false,
  consultationError: false,
  offerSuccess: false,
  consultationSuccess: false
};
const offerSlice = createSlice(
  {
    name: "offer",
    initialState: initialState$3,
    reducers: {
      offerPosting(state) {
        state.offerLoading = true;
        state.offerLoading = false;
        state.offerError = false;
      },
      offerPostingSuccess(state) {
        state.offerLoading = false;
        state.offerError = false;
        state.offerSuccess = true;
      },
      offerPostingError(state) {
        state.offerError = true;
        state.offerLoading = false;
        state.offerSuccess = false;
      },
      consultationPosting(state) {
        state.consultationLoading = true;
        state.consultationError = false;
        state.consultationSuccess = false;
      },
      consultationPostingSuccess(state) {
        state.consultationLoading = false;
        state.consultationError = false;
        state.consultationSuccess = true;
      },
      consultationPostingError(state) {
        state.consultationError = true;
        state.consultationLoading = false;
        state.consultationSuccess = false;
      }
    }
  }
);
const offerReducer = offerSlice.reducer;
const initialState$2 = {
  service: {
    id: 0,
    title: "Кузов",
    subtitle: "Кузовные работы",
    price: "индивидуальная",
    description: "Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация!"
  }
};
const serviceSlice = createSlice({
  name: "service",
  initialState: initialState$2,
  reducers: {
    fetchService(state, action) {
      state.service = action.payload;
    }
  }
});
const serviceReducer = serviceSlice.reducer;
const stock = "индивидуальная";
const servicesInfo = [
  {
    id: 1,
    title: "Услуга",
    subtitle: "Категория",
    price: "цена",
    description: "Описание услуги"
  },
  {
    id: 2,
    title: "Кузов",
    subtitle: "Кузовные работы",
    price: stock,
    description: "Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация!"
  },
  {
    id: 3,
    title: "Пленки",
    subtitle: "Кузов",
    price: stock,
    description: "Антихром, антигравийная пленка, винил, тонировка, бронирование лобового."
  },
  {
    id: 4,
    title: "Антихром",
    subtitle: "Пленки",
    price: stock,
    description: "На кузовах многих современных автомобилей присутствуют хромированные детали. Но не всем автовладельцам по вкусу такое дизайнерское решение. Более стильно, современно и самобытно смотрится машина с черной решеткой радиатора, молдингами, эмблемой и другими элементами. Но большинство производителей авто выпускают такие модели лимитированными сериями, поэтому не всем желающим удается приобрести их. Оклейка пленкой антихром — это возможность сделать транспортное средство оригинальным и эксклюзивным, выделяться на дороге и подчеркнуть свой безупречный вкус и чувство стиля."
  },
  {
    id: 5,
    title: "Антихром",
    subtitle: "Частичный пакет",
    price: "от 2.000 руб.",
    description: "На кузовах многих современных автомобилей присутствуют хромированные детали. Но не всем автовладельцам по вкусу такое дизайнерское решение. Более стильно, современно и самобытно смотрится машина с черной решеткой радиатора, молдингами, эмблемой и другими элементами. Но большинство производителей авто выпускают такие модели лимитированными сериями, поэтому не всем желающим удается приобрести их. Оклейка пленкой антихром — это возможность сделать транспортное средство оригинальным и эксклюзивным, выделяться на дороге и подчеркнуть свой безупречный вкус и чувство стиля."
  },
  {
    id: 6,
    title: "Антихром",
    subtitle: "Полный пакет",
    price: "от 25.000 руб.",
    description: "На кузовах многих современных автомобилей присутствуют хромированные детали. Но не всем автовладельцам по вкусу такое дизайнерское решение. Более стильно, современно и самобытно смотрится машина с черной решеткой радиатора, молдингами, эмблемой и другими элементами. Но большинство производителей авто выпускают такие модели лимитированными сериями, поэтому не всем желающим удается приобрести их. Оклейка пленкой антихром — это возможность сделать транспортное средство оригинальным и эксклюзивным, выделяться на дороге и подчеркнуть свой безупречный вкус и чувство стиля."
  },
  {
    id: 7,
    title: "Антигравийная",
    subtitle: "Пленки",
    price: stock,
    description: "Антигравийная пленка на авто – это специальное покрытие, защищающее кузов в целом или отдельные его элементы от негативного воздействия: гравия, грязи, воды, веток, разнообразных мелких предметов. Всё это может вылетать с дороги от соприкосновения с колесами: как самой машины, так и транспортных средств, едущих впереди."
  },
  {
    id: 8,
    title: "Антигравийная",
    subtitle: "Полная оклейка",
    price: "от 170.000 руб.",
    description: "Антигравийная пленка на авто – это специальное покрытие, защищающее кузов в целом или отдельные его элементы от негативного воздействия: гравия, грязи, воды, веток, разнообразных мелких предметов. Всё это может вылетать с дороги от соприкосновения с колесами: как самой машины, так и транспортных средств, едущих впереди."
  },
  {
    id: 9,
    title: "Антигравийная",
    subtitle: "Зоны риска",
    price: "от 65.000 руб.",
    description: "Антигравийная пленка на авто – это специальное покрытие, защищающее кузов в целом или отдельные его элементы от негативного воздействия: гравия, грязи, воды, веток, разнообразных мелких предметов. Всё это может вылетать с дороги от соприкосновения с колесами: как самой машины, так и транспортных средств, едущих впереди."
  },
  {
    id: 10,
    title: "Винил",
    subtitle: "Пленки",
    price: stock,
    description: "Водители используют множество способов автомобильного тюнинга. Но оклейка винилом — это один из самых популярных и доступных вариантов изменить внешний вид авто без огромных затрат. Такой метод способен защитить лакокрасочный слой и оптику от мелких царапин и потертостей, скрыть уже имеющиеся дефекты и улучшить дизайн машины."
  },
  {
    id: 11,
    title: "Винил",
    subtitle: "Частичная оклейка",
    price: "от 2.000 руб.",
    description: "Водители используют множество способов автомобильного тюнинга. Но оклейка винилом — это один из самых популярных и доступных вариантов изменить внешний вид авто без огромных затрат. Такой метод способен защитить лакокрасочный слой и оптику от мелких царапин и потертостей, скрыть уже имеющиеся дефекты и улучшить дизайн машины."
  },
  {
    id: 12,
    title: "Винил",
    subtitle: "Полная оклейка",
    price: "от 135.000 руб.",
    description: "Водители используют множество способов автомобильного тюнинга. Но оклейка винилом — это один из самых популярных и доступных вариантов изменить внешний вид авто без огромных затрат. Такой метод способен защитить лакокрасочный слой и оптику от мелких царапин и потертостей, скрыть уже имеющиеся дефекты и улучшить дизайн машины."
  },
  {
    id: 13,
    title: "Тонировка",
    subtitle: "Пленки",
    price: "от 500 руб.",
    description: "Тонировка стекол автомобиля является одной из наиболее популярных услуг. В зависимости от ваших предпочтений по тонировке стекол мы подберем наиболее подходящую светопропускаемость и оттенок пленки, который будет максимально дополнять внешний вид вашего автомобиля."
  },
  {
    id: 14,
    title: "Бронирование лобового стекла",
    subtitle: "Пленки",
    price: "от 16.000 руб.",
    description: "Пленка для бронирования имеет очень интересные свойства. Например, энергия от удара равномерно распределится по всей поверхности пленки, сила удара уже влияет не на определенный участок, а на площадь всего стекла и риск того, что стекло треснет, становится минимальным. Так же стекло с подобными свойствами может защитить вас от вандализма."
  },
  {
    id: 15,
    title: "Полировка",
    subtitle: "Кузов",
    price: stock,
    description: "Полировка кузова автомобиля – это не только придание машине внешнего вида нового автомобиля, но и устранение мелких повреждений, царапин, удаление мельчайших неровностей лакокрасочного покрытия и защита поверхности автомобиля от воздействия внешних факторов."
  },
  {
    id: 16,
    title: "Полировка",
    subtitle: "Предпродажная",
    price: "от 10.000 руб.",
    description: "Полировка кузова автомобиля – это не только придание машине внешнего вида нового автомобиля, но и устранение мелких повреждений, царапин, удаление мельчайших неровностей лакокрасочного покрытия и защита поверхности автомобиля от воздействия внешних факторов."
  },
  {
    id: 17,
    title: "Полировка",
    subtitle: "Детейлинг",
    price: "от 15.000 руб.",
    description: "Полировка кузова автомобиля – это не только придание машине внешнего вида нового автомобиля, но и устранение мелких повреждений, царапин, удаление мельчайших неровностей лакокрасочного покрытия и защита поверхности автомобиля от воздействия внешних факторов."
  },
  {
    id: 18,
    title: "Защитное покрытие",
    subtitle: "Кузов",
    price: stock,
    description: "Керамика, жидкое стекло, антидождь, покрытие дисков."
  },
  {
    id: 19,
    title: "Защитное покрытие",
    subtitle: "Керамика",
    price: "от 7.000 руб.",
    description: "Главный плюс – противостояние механическим внешним воздействиям. Защитный слой образует покрытие, которое в несколько раз тверже ЛКП. Следовательно, и поцарапать его намного сложнее. Керамика защищает машину от песка, гравия, примерзшего льда и других мелких вредителей покрытия.\nТакже покрытие защищает машину от появления царапин, “паутинок”. Кузову больше не страшны повреждения от веток, удары камней, царапины и сколы. Гарантирована защита от появления пескоструя. Держится от одного до полутора лет"
  },
  {
    id: 20,
    title: "Защитное покрытие",
    subtitle: "Жидкое стекло",
    price: "от 5.000 руб.",
    description: "Жидкое стекло для автомобиля, безусловно, лучшее на сегодняшний день средство для защиты лакокрасочного покрытия. После того, как работы выполнены, машина выглядит безупречно, будто только что сошла с конвейера. Об этом говорят многочисленные отзывы тех, кто успел опробовать жидкое стекло. Держится до полугода"
  },
  {
    id: 21,
    title: "Защитное покрытие",
    subtitle: "Антидождь",
    price: "от 3.000 руб.",
    description: "Покрытие антидождь - эффективное средство для защиты стекла и придания ему эффекта гидрофобного схода воды – когда вода собирается в капельки и стекает ручейками."
  },
  {
    id: 22,
    title: "Защитное покрытие",
    subtitle: "Диски",
    price: "от 4.000 руб.",
    description: "Полимерное покрытие – это прекрасная защита автомобильных дисков. Их не нужно менять, если возникнут повреждения, так как этот вид покрытия выдерживает даже удары камней. Полимерное покрытие способно выдержать перепады температуры."
  },
  {
    id: 23,
    title: "Дооснащение",
    subtitle: "Кузов",
    price: stock,
    description: "Дооснащение автомобиля – это комплекс работ по установке доп. опций, которые не были установлены автопроизводителем. Грамотное дооснащение расширяет возможности автомобиля и обеспечивает максимальный комфорт водителю и пассажирам."
  },
  {
    id: 24,
    title: "Дооснащение",
    subtitle: "Тюнинг оптики",
    price: stock,
    description: "Тюнинг оптики направлен на изменение внешнего вида и модернизацию осветительного оборудования автомобиля с целью улучшения его технических характеристик. Улучшение освещенности и видимости в темное время суток и при неблагоприятных погодных условиях (туман, дождь, снегопад, запыленность) повышает безопасность всех участников дорожного движения."
  },
  {
    id: 25,
    title: "Дооснащение",
    subtitle: "Доводчики дверей",
    price: "от 65.000 руб.",
    description: "Автодоводчик притягивает неплотно закрытую дверь до полного закрытия. С использованием доводчика пользователю автомобиля не придется вновь открыть дверь и захлопывать ее с силой. По сравнению с ручным закрытием, использование автоматической системы, позволяет сделать это более плотно, что способствует сохранению постоянной температуры воздуха внутри салона и предотвращает попадание внутрь пыли, грязи и влаги, что значительно продлевает срок службы автомобиля и службы элементов двери - (особенно петель). "
  },
  {
    id: 26,
    title: "Дооснащение",
    subtitle: "Ветровики / дефлекторы",
    price: stock,
    description: "Ветровики для автомобиля представляют собой пластиковые полоски, согнутые под определенным углом (с вырезом для зеркала или без него), которые исполняют роль «щита». Они отсекают поток загрязненного дорожного воздуха от стекол и кузова, препятствуя их порче, а значит, вы экономите на ремонте. Ветровики на двери автомобиля повышают аэродинамические характеристики транспортного средства."
  },
  {
    id: 27,
    title: "Дооснащение",
    subtitle: "Автосигнализация",
    price: stock,
    description: "Автосигнализация комплектуется датчиком наклона, удара по кузову или колёсам автомобиля, перемещения, температуры. Кроме того, система регистрирует поддомкрачивание и эвакуацию транспортного средства. Ключевые преимущества сигнализации: Автозапуск, Диалоговый код, который надежно защищает систему от взлома. Двусторонняя связь с брелоком. Высокая дальность действия брелока. Поддержка стандарта GSM. Наличие режима активной охраны. "
  },
  {
    id: 28,
    title: "Салон",
    subtitle: "Работы по салону автомобиля",
    price: stock,
    description: "Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация!"
  },
  {
    id: 29,
    title: "Химчистка",
    subtitle: "Салон",
    price: "от 10.000 руб.",
    description: "Элементы внутренней отделки автомобиля спустя какое-то время теряют свой лоск и привлекательность. Салон выцветает под действием солнечных лучей, пролитая жидкость, пыль, грязь, сигаретный дым и пепел - всё это со временем сказывается на состоянии материала обивки салона автомобиля. Для того чтобы вернуть обивке авто первозданный вид, необходимо провести качественную профессиональную химчистку салона. Благодаря современным технологиям и гипоаллергенными чистящим средствам даже самые застарелые загрязнения исчезают без следа, и внутри машины снова становится чисто и уютно."
  },
  {
    id: 30,
    title: "Пленки",
    subtitle: "Салон",
    price: stock,
    description: "Салон автомобиля также требует тщательного ухода как и кузов, подберите защитную пленку в салон вашего любимого автомобиля на свой вкус!"
    //TODO
  },
  {
    id: 31,
    title: "Пленки",
    subtitle: "Ковролин",
    price: stock,
    description: "Автомобильный ковролин – это покрытие, которое укладывают на пол машины для придания ей привлекательного внешнего вида и обеспечения комфорта. При этом салон получает дополнительную защиту от пыли и грязи, что тоже является важным фактором в эксплуатации."
  },
  {
    id: 32,
    title: "Пленки",
    subtitle: "Оклейка багажника",
    price: stock,
    description: "Покрытие прозрачной, защитной пленкой обшивки багажника в салоне автомобиля. Защищает от обшивку багажника от прямых, грубых воздействий, царапин, грязи и пыли."
  },
  {
    id: 33,
    title: "Чистка и защита кожи",
    subtitle: "Салон",
    price: stock,
    description: "Кожаный салон требует регулярное увлажнение и уход. Качественная обработка кожи гарантирует презентабельный вид салона автомобиля на долгое время. "
  },
  {
    id: 34,
    title: "Чистка и защита кожи",
    subtitle: "Керамика сидений и дверных карт",
    price: "от 10.000 руб.",
    description: "В теплое время года керамика создает защиту поверхностей внутри салона, деталей из пластика и кожи от солнца, предупреждает выцветание твердых и мягких материалов. В холодный сезон керамика не допускает наступления обледенения и разрыва ткани. Все микротрещины устраняются защитным покрытием."
  },
  {
    id: 35,
    title: "Чистка и защита кожи",
    subtitle: "Чистка кожи",
    price: "от 5.000 руб.",
    description: 'Если вы хотите, чтобы ваша машина выглядела роскошно не только снаружи, но и внутри, стоит уделять особое внимание на состояние кожи вашего любимого автомобиля. После проведения данной услуги, ваш салон преобразиться до состояния "Только из салона".'
  },
  {
    id: 36,
    title: "Шумоизоляция",
    subtitle: "Салон",
    price: "от 2.500 руб.",
    description: "Подавление внешних шумов – одна из важных составляющих комфорта и безопасности поездок в автомобиле. Это не модный тренд, а насущная необходимость."
  }
];
const initialState$1 = {
  basket: [],
  selectedParts: ["Не выбрано"],
  selectedCar: "Седан",
  selectedService: "Не выбрано",
  loading: false,
  success: false,
  error: false
};
const basketSlice = createSlice(
  {
    name: "basket",
    initialState: initialState$1,
    reducers: {
      selectCar(state, action) {
        state.selectedCar = action.payload;
      },
      selectService(state, action) {
        state.selectedService = action.payload;
      },
      selectPart(state, action) {
        const foundIdx = state.selectedParts.findIndex((i) => i === action.payload);
        foundIdx >= 0 ? state.selectedParts.splice(foundIdx, 1) : state.selectedParts.push(action.payload);
        if (state.selectedParts.length > 0 && state.selectedParts.find((i) => i === "Не выбрано")) {
          state.selectedParts.splice(state.selectedParts.findIndex((i) => i === "Не выбрано"), 1);
        }
        state.selectedParts.length === 0 && state.selectedParts.push("Не выбрано");
      },
      appendToBasket(state) {
        state.basket.push({
          selectedParts: state.selectedParts,
          selectedCar: state.selectedCar,
          selectedService: state.selectedService
        });
        state.selectedParts = ["Не выбрано"];
      },
      removeFromBasket(state, action) {
        const foundIdx = state.basket.findIndex((i) => {
          return i.selectedCar === action.payload.selectedCar && i.selectedService === action.payload.selectedService && i.selectedParts === action.payload.selectedParts;
        });
        state.basket.splice(foundIdx, 1);
      },
      basketSending(state) {
        state.loading = true;
        state.success = false;
        state.error = false;
        state.basket = [];
        state.selectedParts = ["Не выбрано"];
        state.selectedService = "Не выбрано";
      },
      basketSendingSuccess(state) {
        state.loading = false;
        state.error = false;
        state.success = true;
      },
      basketSendingError(state) {
        state.error = true;
        state.loading = false;
        state.success = false;
      }
    }
  }
);
const basketReducer = basketSlice.reducer;
const initialState = {
  consultation: false,
  offer: false,
  basket: false
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    consultationHandler(state) {
      state.consultation = !state.consultation;
    },
    offerHandler(state) {
      state.offer = !state.offer;
    },
    basketHandler(state) {
      state.basket = !state.basket;
    }
  }
});
const basketModalReducer = modalSlice.reducer;
const fetchReviews = () => async (dispatch) => {
  try {
    dispatch(reviewSlice.actions.reviewsFetching());
    const response = await axios.get(
      "https://syndicate-fa6ea-default-rtdb.firebaseio.com/reviews.json"
    );
    dispatch(reviewSlice.actions.reviewsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(reviewSlice.actions.reviewsFetchingError(e.message));
  }
};
const postOffer = (data) => async (dispatch) => {
  dispatch(modalHandler("offer"));
  try {
    dispatch(offerSlice.actions.offerPosting());
    await emailjs.send(
      "service_4vi8qrg",
      "template_3je89fh",
      data,
      "T4Wj5wNg9lgPTU_sL"
    );
    dispatch(offerSlice.actions.offerPostingSuccess());
  } catch (e) {
    dispatch(offerSlice.actions.offerPostingError());
  }
};
const postConsultation = (data) => async (dispatch) => {
  dispatch(modalHandler("consultation"));
  try {
    dispatch(offerSlice.actions.consultationPosting());
    await emailjs.send(
      "service_4vi8qrg",
      "template_3je89fh",
      data,
      "T4Wj5wNg9lgPTU_sL"
    );
    dispatch(offerSlice.actions.consultationPostingSuccess());
  } catch (e) {
    dispatch(offerSlice.actions.consultationPostingError());
  }
};
const fetchService = (data) => (dispatch) => {
  const response = servicesInfo.find((x) => x.id === Number(data));
  if (response) {
    dispatch(serviceSlice.actions.fetchService(response));
    dispatch(
      basketSlice.actions.selectService(
        response.title + " - " + response.subtitle
      )
    );
  }
};
const selectCar = (data) => (dispatch) => {
  dispatch(basketSlice.actions.selectCar(data));
};
const selectPart = (data) => (dispatch) => {
  dispatch(basketSlice.actions.selectPart(data));
};
const basketAppend = () => (dispatch) => {
  dispatch(basketSlice.actions.appendToBasket());
};
const basketRemove = (data) => (dispatch) => {
  dispatch(basketSlice.actions.removeFromBasket(data));
};
const sendBasket = (data) => async (dispatch) => {
  try {
    dispatch(basketSlice.actions.basketSending());
    await emailjs.send(
      "service_4vi8qrg",
      "template_3je89fh",
      data,
      "T4Wj5wNg9lgPTU_sL"
    );
    dispatch(basketSlice.actions.basketSendingSuccess());
  } catch (e) {
    dispatch(basketSlice.actions.basketSendingError());
  }
};
const modalHandler = (data) => (dispatch) => {
  data === "consultation" && dispatch(modalSlice.actions.consultationHandler());
  data === "offer" && dispatch(modalSlice.actions.offerHandler());
};
const basketHandler = () => (dispatch) => {
  dispatch(modalSlice.actions.basketHandler());
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
const Header = (props) => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  return /* @__PURE__ */ jsxs("div", { className: classes$j["Header"], children: [
    /* @__PURE__ */ jsxs("div", { className: classes$j["Header__links"], children: [
      /* @__PURE__ */ jsxs("div", { className: classes$j["Header__links-intro"], children: [
        /* @__PURE__ */ jsxs("div", { className: classes$j["Header__links-intro-logo"], children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "", width: 50 }),
          /* @__PURE__ */ jsx("img", { src: logoName, alt: "", height: 50 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: classes$j["Header__links-intro-links"], children: [
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/79143205950", children: /* @__PURE__ */ jsx(FaWhatsapp, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/syndicate_detailing_studio/", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://t.me/SyndicateDetailing/", children: /* @__PURE__ */ jsx(FaTelegramPlane, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/channel/UCUYLIy4cS365YvImMWwRJiA", children: /* @__PURE__ */ jsx(FaYoutube, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes$j["Header__links-phones"], children: [
        /* @__PURE__ */ jsxs(UIText, { type: "primary", children: [
          " ",
          /* @__PURE__ */ jsxs("a", { href: "tel:+79644444847", children: [
            " ",
            /* @__PURE__ */ jsx(FaPhoneAlt, {}),
            " +7 (964) 444-48-47"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          UIButton,
          {
            type: "outline",
            onClick: () => dispatch(modalHandler("offer")),
            children: [
              " ",
              /* @__PURE__ */ jsx(FaShare, {}),
              " Записаться"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: classes$j["Header__nav"], children: [
      width > 670 ? /* @__PURE__ */ jsxs("div", { className: classes$j["Header__nav-container"], children: [
        /* @__PURE__ */ jsxs(UIText, { type: "solid", onClick: props.IntroScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Главная" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.ServicesScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Услуги" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.PortfolioScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Портфолио" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.InformationScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "О нас" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.ReviewsScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Отзывы" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.ContactsScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Контакты" })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: classes$j["Header__nav-container"], children: [
        /* @__PURE__ */ jsxs(UIText, { type: "solid", onClick: props.IntroScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Главная" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.ServicesScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Услуги" })
        ] }),
        /* @__PURE__ */ jsxs(UIText, { type: "primary", onClick: props.ContactsScroll, children: [
          " ",
          /* @__PURE__ */ jsx("a", { children: "Контакты" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: classes$j["Header__nav-address"], children: /* @__PURE__ */ jsxs(UIText, { type: "primary", children: [
        " ",
        /* @__PURE__ */ jsxs("a", { href: "https://go.2gis.com/615y5", children: [
          /* @__PURE__ */ jsx(FaMapMarkerAlt, {}),
          " г. Владивосток, Острякова, 49"
        ] })
      ] }) })
    ] })
  ] });
};
const Intro$1 = "_Intro_uhqa7_4";
const Intro__text = "_Intro__text_uhqa7_9";
const classes$g = {
  Intro: Intro$1,
  Intro__text,
  "Intro__text-header": "_Intro__text-header_uhqa7_12",
  "Intro__text-subheader": "_Intro__text-subheader_uhqa7_20",
  "Intro__text-ad": "_Intro__text-ad_uhqa7_25",
  "Intro__text-button": "_Intro__text-button_uhqa7_30",
  "Intro__text-logo": "_Intro__text-logo_uhqa7_34",
  "Intro__text-logo-address": "_Intro__text-logo-address_uhqa7_37"
};
const introBack = "/assets/intro-back 1-min-084ae82a.webp";
const Intro = ({ refProp }) => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes$g["Intro"],
      ref: refProp,
      style: { backgroundImage: `url("${introBack}")` },
      children: /* @__PURE__ */ jsxs("div", { className: classes$g["Intro__text"], children: [
        width > 632 ? /* @__PURE__ */ jsxs("p", { className: classes$g["Intro__text-header"], children: [
          "Преображаем ",
          /* @__PURE__ */ jsx("br", {}),
          " и защищаем ",
          /* @__PURE__ */ jsx("br", {}),
          " автомобили"
        ] }) : /* @__PURE__ */ jsxs("div", { className: classes$g["Intro__text-logo"], children: [
          /* @__PURE__ */ jsx("img", { src: logoName, alt: "" }),
          /* @__PURE__ */ jsx("div", { className: classes$g["Intro__text-logo-address"], children: /* @__PURE__ */ jsxs(UIText, { type: "primary", children: [
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://go.2gis.com/615y5", children: "г. Владивосток, Океанский проспект, 49" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: classes$g["Intro__text-subheader"], children: [
          "Центр профессионального ",
          /* @__PURE__ */ jsx("br", {}),
          "автодетейлинга"
        ] }),
        /* @__PURE__ */ jsx("div", { className: classes$g["Intro__text-button"], children: /* @__PURE__ */ jsxs(
          UIButton,
          {
            type: "outline",
            onClick: () => dispatch(modalHandler("consultation")),
            children: [
              " ",
              /* @__PURE__ */ jsx(FaHeadset, {}),
              " Консультация"
            ]
          }
        ) })
      ] })
    }
  );
};
const vertical = "_vertical_2imbc_4";
const horizontal = "_horizontal_2imbc_11";
const left = "_left_2imbc_18";
const center = "_center_2imbc_22";
const right = "_right_2imbc_26";
const classes$f = {
  vertical,
  horizontal,
  left,
  center,
  right
};
const UILine = (props) => {
  const cls = [classes$f[props.type], classes$f[props.position]];
  return /* @__PURE__ */ jsx("div", { className: cls.join(" ") });
};
const Reviews__title = "_Reviews__title_gken5_4";
const Reviews__cards = "_Reviews__cards_gken5_8";
const classes$e = {
  Reviews__title,
  Reviews__cards,
  "Reviews__cards-card": "_Reviews__cards-card_gken5_13",
  "Reviews__cards-card-name": "_Reviews__cards-card-name_gken5_20",
  "Reviews__cards-card-service": "_Reviews__cards-card-service_gken5_25",
  "Reviews__cards-card-mark": "_Reviews__cards-card-mark_gken5_30",
  "Reviews__cards-card-review": "_Reviews__cards-card-review_gken5_36",
  "Reviews__cards-card-date": "_Reviews__cards-card-date_gken5_42"
};
const swiper = "";
const pagination = "";
const starFull = "/assets/starFull-5987dbb6.svg";
const starOutline = "/assets/starOutline-4301de96.svg";
const UILoader$1 = "_UILoader_1pggz_1";
const UILoader__container = "_UILoader__container_1pggz_5";
const classes$d = {
  UILoader: UILoader$1,
  UILoader__container,
  "lds-ripple": "_lds-ripple_1pggz_1"
};
const UILoader = () => {
  return /* @__PURE__ */ jsx("div", { className: classes$d["UILoader"], children: /* @__PURE__ */ jsxs("div", { className: classes$d["UILoader__container"], children: [
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsx("div", {})
  ] }) });
};
const ReviewList = () => {
  const { reviews, isFetchingLoading, error: error2 } = useAppSelector(
    (state) => state.reviewReducer
  );
  if (isFetchingLoading) {
    return /* @__PURE__ */ jsx(UILoader, {});
  } else if (error2) {
    return /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx(FaRegTimesCircle, {}),
      " ",
      error2
    ] });
  }
  let slidesPerView = 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: classes$e["Reviews__title"], children: [
      "Отзывов наших клиентов: (",
      Object.keys(reviews).length,
      ")"
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        loop: true,
        spaceBetween: 20,
        slidesPerView,
        autoplay: true,
        modules: [Autoplay, Pagination, A11y],
        pagination: { dynamicBullets: true },
        children: Object.entries(reviews).map((review) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: classes$e["Reviews__cards-card"], children: [
          /* @__PURE__ */ jsx("div", { className: classes$e["Reviews__cards-card-name"], children: review[1].name }),
          /* @__PURE__ */ jsx("div", { className: classes$e["Reviews__cards-card-service"], children: review[1].service }),
          /* @__PURE__ */ jsxs("div", { className: classes$e["Reviews__cards-card-mark"], children: [
            Array.apply(0, Array(review[1].stars)).map(function(x, i) {
              return /* @__PURE__ */ jsx("img", { src: starFull, alt: "" }, i);
            }),
            Array.apply(0, Array(5 - review[1].stars)).map(function(x, i) {
              return /* @__PURE__ */ jsx("img", { src: starOutline, alt: "" }, i);
            })
          ] }),
          /* @__PURE__ */ jsx("div", { className: classes$e["Reviews__cards-card-review"], children: review[1].comment }),
          /* @__PURE__ */ jsx("div", { className: classes$e["Reviews__cards-card-date"], children: review[1].date })
        ] }) }, review[0]))
      }
    )
  ] });
};
const Reviews = ({ refProp }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: classes$e["Reviews"], ref: refProp, children: [
    /* @__PURE__ */ jsx(UILine, { type: "horizontal", position: "right" }),
    /* @__PURE__ */ jsx(ReviewList, {}),
    /* @__PURE__ */ jsx(UILine, { type: "horizontal", position: "left" })
  ] });
};
const Information$1 = "_Information_1uw3d_4";
const Information__image = "_Information__image_1uw3d_11";
const Information__description = "_Information__description_1uw3d_14";
const classes$c = {
  Information: Information$1,
  Information__image,
  Information__description,
  "Information__description-name": "_Information__description-name_1uw3d_20",
  "Information__description-info": "_Information__description-info_1uw3d_23",
  "Information__description-details": "_Information__description-details_1uw3d_27",
  "Information__description-details-paragraph": "_Information__description-details-paragraph_1uw3d_32",
  "Information__description-details-paragraph-text": "_Information__description-details-paragraph-text_1uw3d_42"
};
const wand = "/assets/wand-d4d8261c.svg";
const diamond = "/assets/diamond-4551304f.svg";
const img = "/assets/Information-back-9004637e.webp";
const Information = ({ refProp }) => {
  return /* @__PURE__ */ jsxs("div", { className: classes$c["Information"], ref: refProp, children: [
    /* @__PURE__ */ jsx("div", { className: classes$c["Information__image"], children: /* @__PURE__ */ jsx("img", { src: img, alt: "" }) }),
    /* @__PURE__ */ jsxs("div", { className: classes$c["Information__description"], children: [
      /* @__PURE__ */ jsx("div", { className: classes$c["Information__description-name"], children: /* @__PURE__ */ jsx("img", { src: logoName, alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: classes$c["Information__description-info"], children: /* @__PURE__ */ jsx("p", { children: "Подберем идеальный вариант детейлинга для вашего автомобиля! Выполним все процедуры по уходу и защите за авто. Бесплатный осмотр и консультация. Звоните!" }) }),
      /* @__PURE__ */ jsxs("div", { className: classes$c["Information__description-details"], children: [
        /* @__PURE__ */ jsxs("div", { className: classes$c["Information__description-details-paragraph"], children: [
          /* @__PURE__ */ jsx("p", { children: "Индивидуальный подход" }),
          /* @__PURE__ */ jsxs("div", { className: classes$c["Information__description-details-paragraph-text"], children: [
            /* @__PURE__ */ jsx("img", { src: wand, alt: "" }),
            /* @__PURE__ */ jsx("p", { children: "Мы разрабатываем стратегию работы на этапе осмотра машины, таким образом мы  пытаемся максимально улучшить внешний вид вашего любимого автомобиля." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: classes$c["Information__description-details-paragraph"], children: [
          /* @__PURE__ */ jsx("p", { children: "Цена / Качество" }),
          /* @__PURE__ */ jsxs("div", { className: classes$c["Information__description-details-paragraph-text"], children: [
            /* @__PURE__ */ jsx("img", { src: diamond, alt: "" }),
            /* @__PURE__ */ jsx("p", { children: "Наработанный годами опыт и большое число лояльных партнеров, позволяют нам оказывать услуги на высоком уровне за разумную стоимость." })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const title = "_title_p1zjh_42";
const Contacts$1 = "_Contacts_p1zjh_4";
const Contacts__map = "_Contacts__map_p1zjh_56";
const classes$b = {
  "Contacts__info-logo": "_Contacts__info-logo_p1zjh_4",
  "Contacts__info-credentials": "_Contacts__info-credentials_p1zjh_16",
  "Contacts__info-credentials-item": "_Contacts__info-credentials-item_p1zjh_20",
  "Contacts__info-credentials-block": "_Contacts__info-credentials-block_p1zjh_23",
  "Contacts__info-credentials-block-subheader": "_Contacts__info-credentials-block-subheader_p1zjh_30",
  title,
  Contacts: Contacts$1,
  Contacts__map
};
const ContactsMap = () => {
  return /* @__PURE__ */ jsx("div", { className: classes$b["Contacts__map"], children: /* @__PURE__ */ jsx(YMaps, { children: /* @__PURE__ */ jsx(Map, { defaultState: { center: [43.137064, 131.899651], zoom: 14.5 }, children: /* @__PURE__ */ jsx(
    Placemark,
    {
      geometry: [43.137558, 131.899725],
      options: {
        iconLayout: "default#image",
        iconImageHref: logo,
        iconImageSize: [60, 84]
      }
    }
  ) }) }) });
};
const Contacts = ({ refProp }) => {
  let open;
  {
    open = () => null;
  }
  const openInNewTab = (url) => {
    open(url, "_blank", "noopener,noreferrer");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts"], ref: refProp, children: [
    /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts__info"], children: [
      /* @__PURE__ */ jsx(UILine, { position: "left", type: "horizontal" }),
      /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts__info-logo"], children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "" }),
        /* @__PURE__ */ jsx("img", { src: logoName, alt: "" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts__info-credentials"], children: [
        /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts__info-credentials-block"], children: [
          /* @__PURE__ */ jsx("p", { className: classes$b["title"], children: "Позвоните нам:" }),
          /* @__PURE__ */ jsxs(
            UIButton,
            {
              type: "outline",
              onClick: () => open("tel:+79644444847", "_self"),
              children: [
                /* @__PURE__ */ jsx(FaPhoneAlt, {}),
                " +7 (964) 444-48-47"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            UIButton,
            {
              type: "outline",
              onClick: () => open("tel:+79143205950", "_self"),
              children: [
                /* @__PURE__ */ jsx(FaPhoneAlt, {}),
                " +7 (914) 320-59-50"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts__info-credentials-block"], children: [
          /* @__PURE__ */ jsx("p", { className: classes$b["title"], children: "Напишите нам:" }),
          /* @__PURE__ */ jsxs(
            "article",
            {
              className: classes$b["Contacts__info-credentials-item"],
              onClick: () => open(
                "https://api.whatsapp.com/send?phone=79644444847&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20",
                "_self"
              ),
              children: [
                /* @__PURE__ */ jsx(FaWhatsapp, {}),
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(UIText, { type: "primary", children: " +7 (964) 444-48-47" }) }),
                " "
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "article",
            {
              className: classes$b["Contacts__info-credentials-item"],
              onClick: () => open("https://t.me/SyndicateDetailing", "_self"),
              children: [
                /* @__PURE__ */ jsx(FaTelegram, {}),
                /* @__PURE__ */ jsxs("span", { children: [
                  " ",
                  /* @__PURE__ */ jsx(UIText, { type: "primary", children: " +7 (964) 444-48-47" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: classes$b["Contacts__info-credentials-block"], children: [
          /* @__PURE__ */ jsx("p", { className: classes$b["title"], children: "График работы:" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Ежедневно с ",
            /* @__PURE__ */ jsx("b", { children: "09:00" }),
            " до ",
            /* @__PURE__ */ jsx("b", { children: "23:00" })
          ] }),
          /* @__PURE__ */ jsxs(UIText, { type: "primary", children: [
            " ",
            /* @__PURE__ */ jsxs("p", { onClick: () => openInNewTab("https://go.2gis.com/615y5"), children: [
              /* @__PURE__ */ jsx(FaMapMarkerAlt, {}),
              " г. Владивосток, ",
              /* @__PURE__ */ jsx("br", {}),
              " Острякова, 49"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes$b["Contacts__map"], children: /* @__PURE__ */ jsx(ContactsMap, {}) })
  ] }) });
};
const Services$1 = "_Services_yybdk_4";
const Services__content = "_Services__content_yybdk_7";
const Services__title = "_Services__title_yybdk_12";
const Services__tree = "_Services__tree_yybdk_17";
const Services__card = "_Services__card_yybdk_45";
const entering$5 = "_entering_yybdk_83";
const appearing$5 = "_appearing_yybdk_1";
const exiting$5 = "_exiting_yybdk_87";
const classes$a = {
  Services: Services$1,
  Services__content,
  Services__title,
  Services__tree,
  Services__card,
  "Services__card-categories": "_Services__card-categories_yybdk_55",
  "Services__card-categories-title": "_Services__card-categories-title_yybdk_66",
  "Services__card-categories-subtitle": "_Services__card-categories-subtitle_yybdk_70",
  "Services__card-price": "_Services__card-price_yybdk_73",
  "Services__card-description": "_Services__card-description_yybdk_76",
  "Services__card-image": "_Services__card-image_yybdk_79",
  entering: entering$5,
  appearing: appearing$5,
  exiting: exiting$5
};
const CustomTreeItem = (props) => {
  const dispatch = useAppDispatch();
  const TransitionComponent = (props2) => {
    const style = useSpring({
      from: { opacity: 0, transform: "translate3d(20px,0,0)" },
      to: { opacity: props2.in ? 1 : 0, transform: `translate3d(${props2.in ? 0 : 20}px,0,0)` }
    });
    return /* @__PURE__ */ jsx(animated.div, { style, children: /* @__PURE__ */ jsx(Collapse, { ...props2 }) });
  };
  const StyledTreeItem = styled(
    (props2) => /* @__PURE__ */ jsx(TreeItem, { ...props2, TransitionComponent })
  )(() => ({
    [`& .${treeItemClasses.iconContainer}`]: { "& .close": { opacity: 0.3 } },
    [`& .${treeItemClasses.group}`]: { marginLeft: 15, paddingLeft: 18 }
  }));
  return /* @__PURE__ */ jsx(
    StyledTreeItem,
    {
      ...props,
      ContentProps: {
        onClick: () => dispatch(fetchService(props.nodeId))
      }
    }
  );
};
const ServiceList = "_ServiceList_1qnei_1";
const classes$9 = {
  ServiceList
};
const ServicesList = () => {
  return /* @__PURE__ */ jsxs("div", { className: classes$9["ServiceList"], children: [
    /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "2", label: "Кузов", children: [
      /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "3", label: "Пленки", children: [
        /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "4", label: "Антихром", children: [
          /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "5", label: "Частичный пакет" }),
          /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "6", label: "Полный пакет" })
        ] }),
        /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "7", label: "Антигравийная", children: [
          /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "8", label: "Полная" }),
          /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "9", label: "Зоны риска" })
        ] }),
        /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "10", label: "Винил", children: [
          /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "11", label: "Частичная оклейка" }),
          /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "12", label: "Полная оклейка" })
        ] }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "13", label: "Тонировка" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "14", label: "Бронирование лобового стекла" })
      ] }),
      /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "15", label: "Полировка", children: [
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "16", label: "Предпродажная" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "17", label: "Детейлинг" })
      ] }),
      /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "18", label: "Защитное покрытие", children: [
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "19", label: "Керамика" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "20", label: "Жидкое стекло" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "21", label: "Антидождь" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "22", label: "Диски" })
      ] }),
      /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "23", label: "Дооснащение", children: [
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "24", label: "Тюнинг оптики" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "25", label: "Доводчики" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "26", label: "Ветровики" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "27", label: "Автосигнализация" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "28", label: "Салон", children: [
      /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "29", label: "Химчистка" }),
      /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "30", label: "Пленки", children: [
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "31", label: "Ковролин" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "32", label: "Оклейка багажника" })
      ] }),
      /* @__PURE__ */ jsxs(CustomTreeItem, { nodeId: "33", label: "Чистка и защита кожи", children: [
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "34", label: "Керамика сидений и дверных карт" }),
        /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "35", label: "Чистка кожи" })
      ] }),
      /* @__PURE__ */ jsx(CustomTreeItem, { nodeId: "36", label: "Шумоизоляция" })
    ] })
  ] });
};
const ServicesTree = () => {
  return /* @__PURE__ */ jsx("div", { className: classes$a["Services__tree"], children: /* @__PURE__ */ jsx(
    TreeView,
    {
      "aria-label": "customized",
      defaultExpanded: ["1", "2"],
      defaultCollapseIcon: /* @__PURE__ */ jsx(FaAngleDown, {}),
      defaultExpandIcon: /* @__PURE__ */ jsx(FaAngleRight, {}),
      sx: { width: "fit-content", flexGrow: 1, overflowY: "auto" },
      children: /* @__PURE__ */ jsx(ServicesList, {})
    }
  ) });
};
const ServiceCard = () => {
  const { service } = useAppSelector((state) => state.serviceReducer);
  const [toggle, setToggle] = useState(true);
  const [exited, setExited] = useState(false);
  const [title2, setTitle] = useState(service.title);
  const [subtitle, setSubtitle] = useState(service.subtitle);
  const [price, setPrice] = useState(service.price);
  const [description, setDescription] = useState(service.description);
  useEffect(() => {
    setExited(false);
    setToggle(false);
  }, [service]);
  useEffect(() => {
    setToggle(true);
    setTitle(service.title);
    setSubtitle(service.subtitle);
    setPrice(service.price);
    setDescription(service.description);
  }, [exited]);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: classes$a["Services__card"], children: [
    /* @__PURE__ */ jsxs("div", { className: classes$a["Services__card-categories"], children: [
      /* @__PURE__ */ jsx(
        Transition,
        {
          in: toggle,
          timeout: 500,
          mountOnEnter: true,
          unmountOnExit: true,
          onExited: () => setExited(true),
          children: (state) => /* @__PURE__ */ jsx("div", { className: classes$a["Services__card-categories-title"] + " " + classes$a[state], children: title2 })
        }
      ),
      /* @__PURE__ */ jsx(
        Transition,
        {
          in: toggle,
          timeout: 500,
          mountOnEnter: true,
          unmountOnExit: true,
          onExited: () => setExited(true),
          children: (state) => /* @__PURE__ */ jsx("div", { className: classes$a["Services__card-categories-subtitle"] + " " + classes$a[state], children: subtitle })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        in: toggle,
        timeout: 500,
        mountOnEnter: true,
        unmountOnExit: true,
        onExited: () => setExited(true),
        children: (state) => /* @__PURE__ */ jsxs("div", { className: classes$a["Services__card-price"] + " " + classes$a[state], children: [
          "Цена: ",
          price
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      Transition,
      {
        in: toggle,
        timeout: 500,
        mountOnEnter: true,
        unmountOnExit: true,
        onExited: () => setExited(true),
        children: (state) => /* @__PURE__ */ jsx("div", { className: classes$a["Services__card-description"] + " " + classes$a[state], children: description })
      }
    )
  ] }) });
};
const Services = ({ refProp }) => {
  return /* @__PURE__ */ jsxs("div", { className: classes$a["Services"], ref: refProp, children: [
    /* @__PURE__ */ jsx(UILine, { type: "horizontal", position: "left" }),
    /* @__PURE__ */ jsx("div", { className: classes$a["Services__title"], children: "Каталог услуг:" }),
    /* @__PURE__ */ jsxs("div", { className: classes$a["Services__content"], children: [
      /* @__PURE__ */ jsx(ServicesTree, {}),
      /* @__PURE__ */ jsx(ServiceCard, {})
    ] })
  ] });
};
const Portfolio__buttons = "_Portfolio__buttons_ks1qf_4";
const classes$8 = {
  Portfolio__buttons
};
const Gallery$1 = "_Gallery_122vz_4";
const Gallery__container = "_Gallery__container_122vz_9";
const Gallery__fullscreen = "_Gallery__fullscreen_122vz_28";
const entering$4 = "_entering_122vz_70";
const fullSize = "_fullSize_122vz_1";
const exiting$4 = "_exiting_122vz_73";
const appearing$4 = "_appearing_122vz_1";
const classes$7 = {
  Gallery: Gallery$1,
  Gallery__container,
  "Gallery__container-item": "_Gallery__container-item_122vz_14",
  Gallery__fullscreen,
  "Gallery__fullscreen-data": "_Gallery__fullscreen-data_122vz_37",
  "Gallery__fullscreen-data-cross": "_Gallery__fullscreen-data-cross_122vz_41",
  "Gallery__fullscreen-data-slider": "_Gallery__fullscreen-data-slider_122vz_53",
  entering: entering$4,
  fullSize,
  exiting: exiting$4,
  appearing: appearing$4
};
const FullVisible = (props) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes$7["Gallery__fullscreen"],
      onClick: () => props.setFullVisible(false),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: classes$7["Gallery__fullscreen-data"] + " " + classes$7[props.transition],
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: classes$7["Gallery__fullscreen-data-cross"],
                onClick: () => props.setFullVisible(false),
                children: /* @__PURE__ */ jsx(FaCompressAlt, {})
              }
            ),
            /* @__PURE__ */ jsx("div", { className: classes$7["Gallery__fullscreen-data-slider"], children: /* @__PURE__ */ jsx(
              Swiper,
              {
                spaceBetween: 50,
                slidesPerView: 1,
                loop: true,
                modules: [Pagination],
                children: props.slidesArray.map((image, index) => /* @__PURE__ */ jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsx(
                  SwiperSlide,
                  {
                    children: /* @__PURE__ */ jsx("img", { src: image, alt: "" })
                  },
                  index
                ) }))
              }
            ) })
          ]
        }
      )
    }
  );
};
const item1$1 = "/assets/g1-min-51a4e258.webp";
const item2$1 = "/assets/g2-min-9125b6e8.webp";
const item3$1 = "/assets/g3-min-97de0afa.webp";
const item4$1 = "/assets/g4-min-687d1c3c.webp";
const item5$1 = "/assets/g5-min-21816294.webp";
const item6$1 = "/assets/g6-min-e50fe7b8.webp";
const item7$1 = "/assets/g7-min-b4061fe0.webp";
const item8 = "/assets/g8-min-152f9571.webp";
const item9 = "/assets/g9-min-7f0f05be.webp";
const item10 = "/assets/g10-min-84482ac4.webp";
const item11 = "/assets/g11-min-6f2e2617.webp";
const item12 = "/assets/g12-min-fa698961.webp";
const item13 = "/assets/g13-min-d8255e02.webp";
const item14 = "/assets/g14-min-88cd7df4.webp";
const item15 = "/assets/g15-min-5f6020d4.webp";
const item16 = "/assets/g16-min-9a55048c.webp";
const item17 = "/assets/g17-min-61d10cdc.webp";
const item18 = "/assets/g18-min-741ac021.webp";
const item19 = "/assets/g19-min-77b98fd0.webp";
const item20 = "/assets/g20-min-5f052d7a.webp";
const item21 = "/assets/g21-min-d3a466d8.webp";
const i1 = "/assets/g1m-min-f5b73500.webp";
const i2 = "/assets/g2m-min-d4cbd19a.webp";
const i3 = "/assets/g3m-min-6ac537d9.webp";
const i4 = "/assets/g4m-min-819bb1c8.webp";
const i5 = "/assets/g5m-min-45cef695.webp";
const i6 = "/assets/g6m-min-815a7d99.webp";
const i7 = "/assets/g7m-min-577c06e2.webp";
const i8 = "/assets/g8m-min-fceda414.webp";
const i9 = "/assets/g9m-min-a9ec56ac.webp";
const i10 = "/assets/g10m-min-16df179a.webp";
const i11 = "/assets/g11m-min-9dfd2709.webp";
const i12 = "/assets/g12m-min-6a79926b.webp";
const i13 = "/assets/g13m-min-d8bd0bfb.webp";
const i14 = "/assets/g14m-min-e6d9302d.webp";
const i15 = "/assets/g15m-min-4ed549b6.webp";
const i16 = "/assets/g16m-min-a2d3b211.webp";
const Gallery = ({ transition }) => {
  const [ImageArray] = useState([
    item1$1,
    item2$1,
    item3$1,
    item4$1,
    item5$1,
    item6$1,
    item7$1,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
    item17,
    item18,
    item19,
    item20,
    item21
  ]);
  const [PreviewArray] = useState([
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
    i16
  ]);
  const [slidesArray, setSlidesArray] = useState(ImageArray);
  const [fullVisible, setFullVisible] = useState(false);
  const clickHandler = (index) => {
    setSlidesArray([...ImageArray.slice(index), ...ImageArray.slice(0, index)]);
    !fullVisible && setFullVisible(true);
  };
  useEffect(() => {
    fullVisible ? disableScroll.on() : disableScroll.off();
  }, [fullVisible]);
  return /* @__PURE__ */ jsxs("div", { className: classes$7["Gallery"] + " " + classes$7[transition], children: [
    /* @__PURE__ */ jsx("div", { className: classes$7["Gallery__container"], children: PreviewArray.map((image, index) => /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => clickHandler(index),
        className: classes$7["Gallery__container-item"],
        style: { backgroundImage: "url(" + image + ")" }
      },
      index
    )) }),
    /* @__PURE__ */ jsx(Transition, { in: fullVisible, timeout: 200, mountOnEnter: true, unmountOnExit: true, children: (state) => /* @__PURE__ */ jsx(
      FullVisible,
      {
        setFullVisible,
        slidesArray,
        transition: state
      }
    ) })
  ] });
};
const CardStack__slider = "_CardStack__slider_kkwx1_4";
const CardStack$1 = "_CardStack_kkwx1_4";
const entering$3 = "_entering_kkwx1_42";
const appearing$3 = "_appearing_kkwx1_1";
const exiting$3 = "_exiting_kkwx1_45";
const classes$6 = {
  CardStack__slider,
  "CardStack__slider-item": "_CardStack__slider-item_kkwx1_13",
  "CardStack__slider-item-title": "_CardStack__slider-item-title_kkwx1_20",
  "CardStack__slider-item-date": "_CardStack__slider-item-date_kkwx1_25",
  CardStack: CardStack$1,
  entering: entering$3,
  appearing: appearing$3,
  exiting: exiting$3
};
const swiper_min = "";
const effectCards_min = "";
const item1 = "/assets/c1-min-69ad93cd.webp";
const item2 = "/assets/c2-min-db10ab0f.webp";
const item3 = "/assets/c3-min-024048ac.webp";
const item4 = "/assets/c4-min-66489918.webp";
const item5 = "/assets/c5-min-55216dda.webp";
const item6 = "/assets/c6-min-1751b7ba.webp";
const item7 = "/assets/c7-min-4b83b08e.webp";
const CardStack = ({ transition }) => {
  const content = [
    {
      title: "Чистка и защита кожи",
      image: item1
    },
    {
      title: "Полировка кузова, тюнинг оптики",
      image: item3
    },
    {
      title: "Полировка кузова",
      image: item4
    },
    {
      title: "Нанесение бронеплёнки",
      image: item5
    },
    {
      title: "Полировка кузова, чистка и защита кожи",
      image: item6
    },
    {
      title: "Полировка",
      image: item7
    },
    {
      title: "Чистка и защита кожи",
      image: item2
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: classes$6["CardStack"] + " " + classes$6[transition], children: /* @__PURE__ */ jsx("div", { className: classes$6["CardStack__slider"], children: /* @__PURE__ */ jsx(
    Swiper,
    {
      grabCursor: true,
      effect: "creative",
      pagination: { dynamicBullets: true },
      spaceBetween: 10,
      slidesPerView: 2.2,
      centeredSlides: true,
      creativeEffect: {
        prev: { translate: [-50, 10, -200], rotate: [-10, -10, 0] },
        next: { translate: ["100%", 0, 0] }
      },
      modules: [EffectCreative, Pagination],
      children: content.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: classes$6["CardStack__slider-item"], children: [
        /* @__PURE__ */ jsx("p", { className: classes$6["CardStack__slider-item-title"], children: item.title }),
        /* @__PURE__ */ jsx("img", { src: item.image, alt: "" })
      ] }) }, item.image))
    }
  ) }) });
};
const PortfolioMenu = ({ refProp }) => {
  const [active2, setActive] = useState(true);
  const [galleryExited, setGalleryExited] = useState(false);
  const [cardsExited, setCardsExited] = useState(true);
  return /* @__PURE__ */ jsxs("div", { className: classes$8["Portfolio"], ref: refProp, children: [
    /* @__PURE__ */ jsx(UILine, { type: "horizontal", position: "left" }),
    /* @__PURE__ */ jsxs("div", { className: classes$8["Portfolio__buttons"], children: [
      /* @__PURE__ */ jsx(UIText, { type: active2 ? "solid" : "primary", onClick: () => setActive(!active2), children: "Галлерея" }),
      /* @__PURE__ */ jsx(UIText, { type: !active2 ? "solid" : "primary", onClick: () => setActive(!active2), children: "До / После" })
    ] }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        in: active2 && cardsExited,
        timeout: 1e3,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: () => setGalleryExited(false),
        onExited: () => setGalleryExited(true),
        children: (state) => /* @__PURE__ */ jsx(Gallery, { transition: state })
      }
    ),
    /* @__PURE__ */ jsx(
      Transition,
      {
        in: !active2 && galleryExited,
        timeout: 1e3,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: () => setCardsExited(false),
        onExited: () => setCardsExited(true),
        children: (state) => /* @__PURE__ */ jsx(CardStack, { transition: state })
      }
    )
  ] });
};
const Space$1 = "_Space_10tn8_1";
const classes$5 = {
  Space: Space$1
};
const Space = () => {
  return /* @__PURE__ */ jsx("div", { className: classes$5["Space"] });
};
const Action$1 = "_Action_1erc7_4";
const Action__header = "_Action__header_1erc7_12";
const Action__subheader = "_Action__subheader_1erc7_20";
const Action__paragraph = "_Action__paragraph_1erc7_24";
const Action__button = "_Action__button_1erc7_28";
const classes$4 = {
  Action: Action$1,
  Action__header,
  Action__subheader,
  Action__paragraph,
  Action__button
};
const Action = () => {
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: classes$4["Action"], children: [
    /* @__PURE__ */ jsx("p", { className: classes$4["Action__header"], children: "С чего начать ?" }),
    /* @__PURE__ */ jsx("p", { className: classes$4["Action__subheader"], children: "Запишитесь на консультацию по детейлингу!" }),
    /* @__PURE__ */ jsx("p", { className: classes$4["Action__paragraph"], children: "Мы проверим состояние вашего автомобиля, проконсультируем о подходящих защитных покрытиях и подберем идеальный вариант комплекса услуг." }),
    /* @__PURE__ */ jsx("div", { className: classes$4["Action__button"], children: /* @__PURE__ */ jsxs(UIButton, { type: "outline", onClick: () => dispatch(modalHandler("consultation")), children: [
      /* @__PURE__ */ jsx(FaHeadset, {}),
      "КОНСУЛЬТАЦИЯ"
    ] }) })
  ] }) });
};
const UIModal = "_UIModal_kxf1s_4";
const UIModal__container = "_UIModal__container_kxf1s_16";
const entering$2 = "_entering_kxf1s_23";
const appearing$2 = "_appearing_kxf1s_1";
const exiting$2 = "_exiting_kxf1s_26";
const error$1 = "_error_kxf1s_61";
const disabled = "_disabled_kxf1s_73";
const classes$3 = {
  UIModal,
  UIModal__container,
  entering: entering$2,
  appearing: appearing$2,
  exiting: exiting$2,
  "UIModal__container-cross": "_UIModal__container-cross_kxf1s_29",
  "UIModal__container-title": "_UIModal__container-title_kxf1s_38",
  "UIModal__container-fieldName": "_UIModal__container-fieldName_kxf1s_44",
  "UIModal__container-service": "_UIModal__container-service_kxf1s_47",
  "UIModal__container-service-selected": "_UIModal__container-service-selected_kxf1s_50",
  error: error$1,
  "UIModal__container-service-options": "_UIModal__container-service-options_kxf1s_64",
  disabled,
  "UIModal__container-button": "_UIModal__container-button_kxf1s_76"
};
const input = "_input_12216_4";
const error = "_error_12216_18";
const input__class = {
  input,
  error
};
const ModalOffer = ({ transition }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [service, setService] = useState("Услуга");
  const [serviceError, setServiceError] = useState("");
  const [serviceActive, setServiceActive] = useState(false);
  const serviceActiveHandler = (e) => {
    e.preventDefault();
    setServiceActive(!serviceActive);
  };
  const serviceHandler = (e, s) => {
    e.preventDefault();
    setService(s);
    setServiceActive(false);
    if (s !== "Услуга") {
      setServiceError("");
    }
  };
  const services = [
    "Пленка",
    "Полировка",
    "Защита",
    "Дооснащение",
    "Химчистка",
    "Чистка кожи",
    "Шумоизоляция"
  ];
  const phoneHandler = (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    setPhone(e.target.value);
    if (phoneTouched && e.target.value.replace(/\D/g, "").length < 11) {
      setPhoneError("Некорректный номер телефона !");
    }
    if (phoneTouched && e.target.value.replace(/\D/g, "").length === 11) {
      setPhoneError("");
    }
  };
  const nameHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setName(e.target.value);
    if (nameTouched && e.target.value.length < 1) {
      setNameError("Введите имя !");
    }
    if (nameTouched && e.target.value.length > 0) {
      setNameError("");
    }
  };
  const checkForm = () => {
    let counter = 0;
    if (service === "Услуга") {
      setServiceError("Выберите услугу !");
      counter += 1;
    } else {
      setServiceError("");
    }
    if (name.length === 0) {
      setNameError("Введите имя !");
      counter += 1;
    }
    if (phone.replace(/\D/g, "").length < 11) {
      setPhoneError("Некорректный номер телефона !");
      counter += 1;
    }
    return counter;
  };
  const sendHandler = (e) => {
    e.preventDefault();
    if (checkForm() < 1) {
      const data = { name, service, phone, title: "Услуга" };
      dispatch(postOffer(data));
      setPhone("");
      setName("");
      setService("Услуга");
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes$3["UIModal"] + " " + classes$3[transition],
      onClick: () => dispatch(modalHandler("offer")),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: classes$3["UIModal__container"] + " " + classes$3[transition],
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: classes$3["UIModal__container-cross"],
                onClick: () => dispatch(modalHandler("offer")),
                children: /* @__PURE__ */ jsx(FaTimes, {})
              }
            ),
            /* @__PURE__ */ jsx("p", { className: classes$3["UIModal__container-title"], children: "Быстрая запись" }),
            /* @__PURE__ */ jsx("p", { className: classes$3["UIModal__container-fieldName"], children: "Имя" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: name,
                maxLength: 15,
                onChange: (e) => nameHandler(e),
                className: nameError ? input__class["input"] + " " + input__class["error"] : input__class["input"]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: classes$3["UIModal__container-service"], children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: serviceError ? classes$3["UIModal__container-service-selected"] + " " + classes$3["error"] : classes$3["UIModal__container-service-selected"],
                  onClick: (e) => serviceActiveHandler(e),
                  children: [
                    service,
                    /* @__PURE__ */ jsx(FaAngleDown, {})
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: serviceActive ? classes$3["UIModal__container-service-options"] : classes$3["UIModal__container-service-options"] + " " + classes$3["disabled"],
                  children: services.map((i) => /* @__PURE__ */ jsx("div", { onClick: (e) => serviceHandler(e, i), children: i }, i))
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: classes$3["UIModal__container-fieldName"], children: "Номер телефона" }),
            /* @__PURE__ */ jsx(
              InputMask,
              {
                type: "text",
                value: phone,
                mask: "+7\\(999) 999-99-99",
                onChange: (e) => phoneHandler(e),
                className: phoneError ? input__class["input"] + " " + input__class["error"] : input__class["input"]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: classes$3["UIModal__container-button"], children: /* @__PURE__ */ jsxs(UIButton, { type: "outline", onClick: (e) => sendHandler(e), children: [
              /* @__PURE__ */ jsx(FaShare, {}),
              " Записаться! "
            ] }) })
          ]
        }
      )
    }
  );
};
const ModalConsultation = ({ transition }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const phoneHandler = (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    setPhone(e.target.value);
    if (phoneTouched && e.target.value.replace(/\D/g, "").length < 11) {
      setPhoneError("Некорректный номер телефона !");
    }
    if (phoneTouched && e.target.value.replace(/\D/g, "").length === 11) {
      setPhoneError("");
    }
  };
  const nameHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setName(e.target.value);
    if (nameTouched && e.target.value.length < 1) {
      setNameError("Введите имя !");
    }
    if (nameTouched && e.target.value.length > 0) {
      setNameError("");
    }
  };
  const checkForm = () => {
    let counter = 0;
    if (name.length === 0) {
      setNameError("Введите имя !");
      counter += 1;
    }
    if (phone.replace(/\D/g, "").length < 11) {
      setPhoneError("Некорректный номер телефона !");
      counter += 1;
    }
    return counter;
  };
  const sendHandler = (e) => {
    e.preventDefault();
    if (checkForm() < 1) {
      const data = { name, phone, title: "Консультация", service: "" };
      dispatch(postConsultation(data));
      setPhone("");
      setName("");
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes$3["UIModal"] + " " + classes$3[transition],
      onClick: () => dispatch(modalHandler("consultation")),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: classes$3["UIModal__container"] + " " + classes$3[transition],
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: classes$3["UIModal__container-cross"],
                onClick: () => dispatch(modalHandler("consultation")),
                children: /* @__PURE__ */ jsx(FaTimes, {})
              }
            ),
            /* @__PURE__ */ jsx("p", { className: classes$3["UIModal__container-title"], children: "Консультация" }),
            /* @__PURE__ */ jsx("p", { className: classes$3["UIModal__container-fieldName"], children: "Имя" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: name,
                maxLength: 15,
                onChange: (e) => nameHandler(e),
                className: nameError ? input__class["input"] + " " + input__class["error"] : input__class["input"]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: classes$3["UIModal__container-fieldName"], children: "Номер телефона" }),
            /* @__PURE__ */ jsx(
              InputMask,
              {
                type: "text",
                value: phone,
                mask: "+7\\(999) 999-99-99",
                onChange: (e) => phoneHandler(e),
                className: phoneError ? input__class["input"] + " " + input__class["error"] : input__class["input"]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: classes$3["UIModal__container-button"], children: /* @__PURE__ */ jsxs(UIButton, { type: "outline", onClick: (e) => sendHandler(e), children: [
              /* @__PURE__ */ jsx(FaShare, {}),
              " Записаться! "
            ] }) })
          ]
        }
      )
    }
  );
};
const ModalBasket$1 = "_ModalBasket_1yxx7_4";
const ModalBasket__content = "_ModalBasket__content_1yxx7_18";
const ModalBasket__empty = "_ModalBasket__empty_1yxx7_31";
const ModalBasket__cross = "_ModalBasket__cross_1yxx7_36";
const ModalBasket__header = "_ModalBasket__header_1yxx7_41";
const ModalBasket__button = "_ModalBasket__button_1yxx7_67";
const ModalBasket__send = "_ModalBasket__send_1yxx7_72";
const entering$1 = "_entering_1yxx7_92";
const appearing$1 = "_appearing_1yxx7_1";
const exiting$1 = "_exiting_1yxx7_95";
const classes$2 = {
  ModalBasket: ModalBasket$1,
  ModalBasket__content,
  "ModalBasket__content-title": "_ModalBasket__content-title_1yxx7_25",
  "ModalBasket__content-button": "_ModalBasket__content-button_1yxx7_28",
  ModalBasket__empty,
  ModalBasket__cross,
  ModalBasket__header,
  "ModalBasket__order-item-car": "_ModalBasket__order-item-car_1yxx7_59",
  "ModalBasket__order-item-button": "_ModalBasket__order-item-button_1yxx7_63",
  ModalBasket__button,
  ModalBasket__send,
  "ModalBasket__send-title": "_ModalBasket__send-title_1yxx7_77",
  "ModalBasket__send-field": "_ModalBasket__send-field_1yxx7_81",
  "ModalBasket__send-button": "_ModalBasket__send-button_1yxx7_89",
  entering: entering$1,
  appearing: appearing$1,
  exiting: exiting$1,
  "Basket-popup": "_Basket-popup_1yxx7_99"
};
const ModalBasket = ({ transition }) => {
  const [basketState, setBasketState] = useState(true);
  const { basket } = useAppSelector((state) => state.basketReducer);
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [nameError, setNameError] = useState("");
  useWindowDimensions();
  const phoneHandler = (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    setPhone(e.target.value);
    if (phoneTouched && e.target.value.replace(/\D/g, "").length < 11) {
      setPhoneError("Некорректный номер телефона !");
    }
    if (phoneTouched && e.target.value.replace(/\D/g, "").length === 11) {
      setPhoneError("");
    }
  };
  const nameHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setName(e.target.value);
    if (nameTouched && e.target.value.length < 1) {
      setNameError("Введите имя !");
    }
    if (nameTouched && e.target.value.length > 0) {
      setNameError("");
    }
  };
  const checkForm = () => {
    let counter = 0;
    if (name.length === 0) {
      setNameError("Введите имя !");
      counter += 1;
    }
    if (phone.replace(/\D/g, "").length < 11) {
      setPhoneError("Некорректный номер телефона !");
      counter += 1;
    }
    return counter;
  };
  const dispatch = useAppDispatch();
  const sendHandler = (e) => {
    e.preventDefault();
    if (checkForm() < 1) {
      let service = "";
      for (let i in basket) {
        if (basket.hasOwnProperty(i)) {
          service += "| Кузов: " + basket[i].selectedCar + "\r\n. Услуга: " + basket[i].selectedService + "\r\n. Детали: " + basket[i].selectedParts.join(", ") + "\r\n";
        }
      }
      dispatch(sendBasket({ service, phone, name }));
      dispatch(basketHandler());
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket"] + " " + classes$2[transition], children: [
    /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__header"], children: [
      !basketState && /* @__PURE__ */ jsxs("span", { onClick: () => setBasketState(true), children: [
        /* @__PURE__ */ jsx(FaArrowLeft, {}),
        " "
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Корзина" }),
      /* @__PURE__ */ jsx("span", { onClick: () => dispatch(basketHandler()), children: /* @__PURE__ */ jsx(FaTimes, {}) })
    ] }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("br", {}),
    basketState ? /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__content"], children: [
      basket.map((i, index) => /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__order"], children: [
        /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__order-item"], children: [
          /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__order-item-car"], children: [
            /* @__PURE__ */ jsxs("b", { children: [
              index + 1,
              "."
            ] }),
            " ",
            i.selectedCar,
            " : ",
            i.selectedParts.join(", ")
          ] }),
          /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__order-item-service"], children: [
            /* @__PURE__ */ jsx("b", { children: "Услуга: " }),
            " ",
            i.selectedService
          ] }),
          /* @__PURE__ */ jsx("div", { className: classes$2["ModalBasket__order-item-button"], children: /* @__PURE__ */ jsxs(
            UIButton,
            {
              type: "primary",
              onClick: () => dispatch(basketRemove(i)),
              children: [
                /* @__PURE__ */ jsx(FaTrash, {}),
                " Удалить"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("br", {})
      ] }, index)),
      basket.length > 0 ? /* @__PURE__ */ jsx("div", { className: classes$2["ModalBasket__button"], children: /* @__PURE__ */ jsx(
        UIButton,
        {
          type: "outline",
          onClick: () => setBasketState(false),
          children: "   Перейти к оформлению"
        }
      ) }) : /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__empty"], children: [
        /* @__PURE__ */ jsx("p", { children: "Нет выбранных услуг" }),
        /* @__PURE__ */ jsx("br", {})
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__content"], children: [
      /* @__PURE__ */ jsx("div", { className: classes$2["ModalBasket__content-back"] }),
      /* @__PURE__ */ jsx("p", { className: classes$2["ModalBasket__content-title"], children: "Персональная информация" }),
      /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__content-field"], children: [
        /* @__PURE__ */ jsx("p", { children: "Имя" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: name,
            maxLength: 15,
            onChange: (e) => nameHandler(e),
            className: nameError ? input__class["input"] + " " + input__class["error"] : input__class["input"]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes$2["ModalBasket__content-field"], children: [
        /* @__PURE__ */ jsx("p", { children: "Номер телефона" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          InputMask,
          {
            type: "text",
            value: phone,
            onChange: (e) => phoneHandler(e),
            className: phoneError ? input__class["input"] + " " + input__class["error"] : input__class["input"],
            mask: "+7\\(999) 999-99-99"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: classes$2["ModalBasket__content-button"], children: /* @__PURE__ */ jsxs(
        UIButton,
        {
          type: "outline",
          onClick: (e) => sendHandler(e),
          children: [
            /* @__PURE__ */ jsx(FaPaperPlane, {}),
            " Отправить заявку"
          ]
        }
      ) })
    ] })
  ] });
};
const ModalBasketContainer = () => {
  const [hiddenExited, setHiddenExited] = useState(false);
  const [expandedExited, setExpandedExited] = useState(true);
  const { basket } = useAppSelector((state) => state.basketReducer);
  const { basket: basketModal } = useAppSelector((state) => state.basketModalReducer);
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Transition,
      {
        in: !basketModal && expandedExited,
        timeout: 500,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: () => setHiddenExited(false),
        onExited: () => setHiddenExited(true),
        children: (state) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: classes$2["Basket-popup"] + " " + classes$2[state],
            onClick: () => dispatch(basketHandler()),
            children: [
              /* @__PURE__ */ jsx(FaShoppingCart, {}),
              /* @__PURE__ */ jsxs("p", { children: [
                " ",
                basket.length
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Transition,
      {
        in: basketModal && hiddenExited,
        timeout: 500,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: () => setExpandedExited(false),
        onExited: () => setExpandedExited(true),
        children: (state) => /* @__PURE__ */ jsx(ModalBasket, { transition: state })
      }
    )
  ] });
};
const Modals = () => {
  const { offer, consultation } = useAppSelector((state) => state.modalReducer);
  useEffect(() => {
    offer || consultation ? disableScroll.on() : disableScroll.off();
  }, [offer, consultation]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Transition, { in: offer, timeout: 200, mountOnEnter: true, unmountOnExit: true, children: (state) => /* @__PURE__ */ jsx(ModalOffer, { transition: state }) }),
    /* @__PURE__ */ jsx(Transition, { in: consultation, timeout: 200, mountOnEnter: true, unmountOnExit: true, children: (state) => /* @__PURE__ */ jsx(ModalConsultation, { transition: state }) }),
    /* @__PURE__ */ jsx(ModalBasketContainer, {})
  ] });
};
const UINotification$1 = "_UINotification_1p2cx_4";
const UINotification__content = "_UINotification__content_1p2cx_11";
const entering = "_entering_1p2cx_20";
const appearing = "_appearing_1p2cx_1";
const exiting = "_exiting_1p2cx_23";
const classes$1 = {
  UINotification: UINotification$1,
  UINotification__content,
  entering,
  appearing,
  exiting
};
const UINotification = () => {
  const { loading: basketLoading, success: basketSuccess, error: basketError } = useAppSelector((state) => state.basketReducer);
  const {
    offerLoading,
    offerSuccess,
    offerError,
    consultationLoading,
    consultationSuccess,
    consultationError
  } = useAppSelector((state) => state.offerReducer);
  const [exited, setExited] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      setExited(true);
      setTimeout(() => {
        setExited(false);
      }, 5e3);
    }
  }, [
    basketLoading,
    basketSuccess,
    basketError,
    offerSuccess,
    offerError,
    offerLoading,
    consultationLoading,
    consultationSuccess,
    consultationError
  ]);
  return /* @__PURE__ */ jsx(
    Transition,
    {
      in: exited,
      timeout: 200,
      mountOnEnter: true,
      unmountOnExit: true,
      children: (state) => /* @__PURE__ */ jsx("div", { className: classes$1["UINotification"] + " " + classes$1[state], children: /* @__PURE__ */ jsxs("div", { className: classes$1["UINotification__content"], children: [
        (basketLoading || offerLoading || consultationLoading) && /* @__PURE__ */ jsx("p", { children: "Запрос выполняется..." }),
        (basketError || offerError || consultationError) && /* @__PURE__ */ jsx("p", { children: "Ошибка, повторите еще раз !" }),
        (basketSuccess || offerSuccess || consultationSuccess) && /* @__PURE__ */ jsx("p", { children: "Запрос отправлен !" })
      ] }) })
    }
  );
};
function Model$3({ dispatch }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Bus.glb");
  const { width } = useWindowDimensions();
  const clickHandler = (e) => {
    let new_material = e.object.material.clone();
    let old_material = e.object.material.clone();
    new_material.color.setRGB(0.294117647, 0, 0.509803922);
    e.object.material = new_material;
    e.object.material.needsUpdate = true;
    dispatch(selectPart(e.object.name));
    setTimeout(() => {
      e.object.material = old_material;
    }, 200);
  };
  return (
    //@ts-ignore
    /* @__PURE__ */ jsxs(
      "group",
      {
        ref: group,
        dispose: null,
        onDoubleClick: width > 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        onClick: width < 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        children: [
          /* @__PURE__ */ jsx("mesh", { name: "1", geometry: nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry, material: nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "2", geometry: nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry, material: materials.black_plastic_matt, position: [-72.7, 0.53, 4.83], rotation: [1.83, -0.26, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "3", geometry: nodes.Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "4", geometry: nodes.Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "5", geometry: nodes.Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "6", geometry: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "7", geometry: nodes.Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: nodes.Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "8", geometry: nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "9", geometry: nodes.Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "10", geometry: nodes.Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "11", geometry: nodes.Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "12", geometry: nodes.Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "13", geometry: nodes.Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: materials.black_plastic_matt, position: [-72.7, 0.53, 4.83], rotation: [1.83, -0.26, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "14", geometry: nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material, position: [-3.69, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "15", geometry: nodes.Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.body_color, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "16", geometry: nodes.Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: materials.black_plastic_matt, position: [-3.61, -0.02, 4.78], rotation: [Math.PI / 2, 0, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "17", geometry: nodes.Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry, material: nodes.Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.material, position: [-72.45, -0.47, 4.78], rotation: [Math.PI / 2, Math.PI / 6, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "18", geometry: nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material, position: [-72.68, -0.02, 4.78], rotation: [Math.PI / 2, 0, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "19", geometry: nodes.Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1q", geometry: nodes.Mesh1136_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1w", geometry: nodes.Mesh750_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1e", geometry: nodes.Mesh1119_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1r", geometry: nodes.Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: materials.black_plastic_matt, position: [5.05, 0, 3.42], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1t", geometry: nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1y", geometry: nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry, material: nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.material, position: [-72.7, 0.53, 4.83], rotation: [1.83, -0.26, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1u", geometry: nodes.Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1i", geometry: nodes.Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: nodes.Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material, position: [-72.45, -0.47, 4.78], rotation: [Math.PI / 2, Math.PI / 6, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1o", geometry: nodes.Mesh1058_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1p", geometry: nodes.Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: nodes.Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1[", geometry: nodes.Mesh755_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1]", geometry: nodes.Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: nodes.Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1a", geometry: nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material, position: [-3.69, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1s", geometry: nodes.Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1d", geometry: nodes.Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1f", geometry: nodes.Mesh1050_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1g", geometry: nodes.Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1h", geometry: nodes.Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1j", geometry: nodes.Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.45, -0.47, 4.78], rotation: [Math.PI / 2, Math.PI / 6, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1k", geometry: nodes.Mesh735_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1l", geometry: nodes.Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1z", geometry: nodes.Mesh45_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1x", geometry: nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material, position: [-72.68, -0.02, 4.78], rotation: [Math.PI / 2, 0, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1c", geometry: nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: materials.black_plastic_gloss, position: [5.12, -0.02, 3.81], rotation: [Math.PI / 2, 0, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1v", geometry: nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material, position: [-3.68, 0, 3.42], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1b", geometry: nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1n", geometry: nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1m", geometry: nodes.Mesh497_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1,", geometry: nodes.Mesh760_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1.", geometry: nodes.Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1/", geometry: nodes.Mesh764_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "111", geometry: nodes.Mesh1115_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "122", geometry: nodes.Mesh739_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "133", geometry: nodes.Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: nodes.Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "144", geometry: nodes.Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: nodes.Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "155", geometry: nodes.Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "166", geometry: nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "177", geometry: nodes.Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "188", geometry: nodes.Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "199", geometry: nodes.Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "100", geometry: nodes.Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry, material: materials.black_plastic_matt, position: [-72.68, -0.02, 4.78], rotation: [Math.PI / 2, 0, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1qq", geometry: nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ww", geometry: nodes.toyota_alphard.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ee", geometry: nodes.toyota_alphard001.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Шины", geometry: nodes.toyota_alphard003.geometry, material: materials["gum.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1tt", geometry: nodes.toyota_alphard004.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1yy", geometry: nodes.toyota_alphard005.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1uu", geometry: nodes.toyota_alphard006.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ii", geometry: nodes.toyota_alphard007.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1oo", geometry: nodes.toyota_alphard008.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1pp", geometry: nodes.toyota_alphard009.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1[[", geometry: nodes.toyota_alphard010.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1]]", geometry: nodes.toyota_alphard011.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1q1", geometry: nodes.toyota_alphard012.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1w2", geometry: nodes.toyota_alphard013.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1e3", geometry: nodes.toyota_alphard014.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1r4", geometry: nodes.toyota_alphard015.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1y6", geometry: nodes.toyota_alphard017.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1u7", geometry: nodes.toyota_alphard018.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1i8", geometry: nodes.toyota_alphard019.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1o9", geometry: nodes.toyota_alphard020.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1p0", geometry: nodes.toyota_alphard021.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1aa", geometry: nodes.toyota_alphard022.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ss", geometry: nodes.toyota_alphard023.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое стекло", geometry: nodes.toyota_alphard024.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая фара", geometry: nodes.toyota_alphard025.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1gg", geometry: nodes.toyota_alphard026.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1hh", geometry: nodes.toyota_alphard029.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1jj", geometry: nodes.toyota_alphard030.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1kk", geometry: nodes.toyota_alphard031.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ll", geometry: nodes.toyota_alphard032.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1;;", geometry: nodes.toyota_alphard033.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1zz", geometry: nodes.toyota_alphard034.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1xx", geometry: nodes.toyota_alphard035.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1cc", geometry: nodes.toyota_alphard036.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1vv", geometry: nodes.toyota_alphard037.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Молдинг хром", geometry: nodes.toyota_alphard038.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1nn", geometry: nodes.toyota_alphard040.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1mm", geometry: nodes.toyota_alphard041.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1,,", geometry: nodes.toyota_alphard043.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Зеркало", geometry: nodes.toyota_alphard044.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1//", geometry: nodes.toyota_alphard046.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Днище", geometry: nodes.toyota_alphard047.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1xs", geometry: nodes.toyota_alphard048.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний шильдик", geometry: nodes.toyota_alphard049.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое центральное стекло", geometry: nodes.toyota_alphard050.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Лобовое стекло", geometry: nodes.toyota_alphard051.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1mj", geometry: nodes.toyota_alphard042.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Капот", geometry: nodes.toyota_alphard057.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний бампер", geometry: nodes.toyota_alphard058.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Матовый пластик", geometry: nodes.toyota_alphard059.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "11111", geometry: nodes.toyota_alphard039.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая ручка", geometry: nodes.toyota_alphard060.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1dsfsd", geometry: nodes.toyota_alphard045.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая дверь", geometry: nodes.toyota_alphard052.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая дверь", geometry: nodes.toyota_alphard053.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая дверь", geometry: nodes.toyota_alphard061.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Левая стойка", geometry: nodes.toyota_alphard062.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Правая стойка", geometry: nodes.toyota_alphard063.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое крыло", geometry: nodes.toyota_alphard064.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое крыло", geometry: nodes.toyota_alphard065.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Багажник", geometry: nodes.toyota_alphard066.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое крыло", geometry: nodes.toyota_alphard067.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое крыло", geometry: nodes.toyota_alphard068.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний бампер", geometry: nodes.toyota_alphard069.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Крыша", geometry: nodes.toyota_alphard070.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпус левого зеркала", geometry: nodes.toyota_alphard071.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпус правого зеркала", geometry: nodes.toyota_alphard072.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая дверь", geometry: nodes.toyota_alphard073.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое стекло", geometry: nodes.toyota_alphard055.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое центральное стекло", geometry: nodes.toyota_alphard074.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое стекло", geometry: nodes.toyota_alphard075.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое стекло", geometry: nodes.toyota_alphard076.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1xxxxxxxx", geometry: nodes.toyota_alphard077.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1bgbgbd", geometry: nodes.toyota_alphard078.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1cccccccccccc", geometry: nodes.toyota_alphard079.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1aaaaaaaa", geometry: nodes.toyota_alphard080.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ssssssss", geometry: nodes.toyota_alphard081.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее стекло", geometry: nodes.toyota_alphard082.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ddddddddddd", geometry: nodes.toyota_alphard083.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Шильдики", geometry: nodes.toyota_alphard084.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний левый диск", geometry: nodes.toyota_alphard085.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний правый диск", geometry: nodes.toyota_alphard086.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний левый диск", geometry: nodes.toyota_alphard087.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний правый диск", geometry: nodes.toyota_alphard088.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя праая фара", geometry: nodes.toyota_alphard089.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая фара", geometry: nodes.toyota_alphard090.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая доп. оптика", geometry: nodes.toyota_alphard091.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая доп. оптика", geometry: nodes.toyota_alphard092.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая ручка ", geometry: nodes.toyota_alphard093.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая ручка", geometry: nodes.toyota_alphard094.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая ручка", geometry: nodes.toyota_alphard095.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая фара", geometry: nodes.toyota_alphard096.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1qqqqqqaaaaq", geometry: nodes.toyota_alphard027.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1qaqaqaq", geometry: nodes.LKSS_SIZE_16001_Mesh_2009.geometry, material: nodes.LKSS_SIZE_16001_Mesh_2009.material, position: [-63.65, 0, 0], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 1.93 }),
          /* @__PURE__ */ jsx("mesh", { name: "lllllllll", geometry: nodes.LKSS_SIZE_028_Mesh_2010.geometry, material: nodes.LKSS_SIZE_028_Mesh_2010.material, position: [-63.65, 0, 0], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 1.93 })
        ]
      }
    )
  );
}
useGLTF.preload("/Bus.glb");
function Model$2({ dispatch }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Sedan.glb");
  const { width } = useWindowDimensions();
  const clickHandler = (e) => {
    let new_material = e.object.material.clone();
    let old_material = e.object.material.clone();
    new_material.color.setRGB(0.294117647, 0, 0.509803922);
    e.object.material = new_material;
    e.object.material.needsUpdate = true;
    dispatch(selectPart(e.object.name));
    setTimeout(() => {
      e.object.material = old_material;
    }, 200);
  };
  return (
    //@ts-ignore
    /* @__PURE__ */ jsxs(
      "group",
      {
        ref: group,
        dispose: null,
        onDoubleClick: width > 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        onClick: width < 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        children: [
          /* @__PURE__ */ jsx("mesh", { name: "0", geometry: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "1", geometry: nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry, material: nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.material, position: [-72.7, 0.53, 4.83], rotation: [1.83, -0.26, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "2", geometry: nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "3", geometry: nodes["mercedes_s-class_s580"].geometry, material: materials["(null)"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Матовый пластик", geometry: nodes["mercedes_s-class_s580001"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Матовый пластик", geometry: nodes["mercedes_s-class_s580002"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задние крылья", geometry: nodes["mercedes_s-class_s580003"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Молдинг хром", geometry: nodes["mercedes_s-class_s580004"].geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "8", geometry: nodes["mercedes_s-class_s580005"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "9", geometry: nodes["mercedes_s-class_s580006"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "w", geometry: nodes["mercedes_s-class_s580008"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "e", geometry: nodes["mercedes_s-class_s580009"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "r", geometry: nodes["mercedes_s-class_s580010"].geometry, material: materials["(null)"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "t", geometry: nodes["mercedes_s-class_s580011"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "y", geometry: nodes["mercedes_s-class_s580012"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое стекло", geometry: nodes["mercedes_s-class_s580013"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "i", geometry: nodes["mercedes_s-class_s580014"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Зеркала", geometry: nodes["mercedes_s-class_s580015"].geometry, material: materials["(null)"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "p", geometry: nodes["mercedes_s-class_s580016"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "a", geometry: nodes["mercedes_s-class_s580017"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "s", geometry: nodes["mercedes_s-class_s580018"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "d", geometry: nodes["mercedes_s-class_s580019"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Крыша", geometry: nodes["mercedes_s-class_s580020"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "g", geometry: nodes["mercedes_s-class_s580021"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "h", geometry: nodes["mercedes_s-class_s580022"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Левая задняя доп. оптика", geometry: nodes["mercedes_s-class_s580023"].geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "k", geometry: nodes["mercedes_s-class_s580024"].geometry, material: materials["(null)"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "l", geometry: nodes["mercedes_s-class_s580025"].geometry, material: materials["(null)"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: ";", geometry: nodes["mercedes_s-class_s580026"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "z", geometry: nodes["mercedes_s-class_s580028"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний левый диск", geometry: nodes["mercedes_s-class_s580029"].geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Шины", geometry: nodes["mercedes_s-class_s580030"].geometry, material: materials["gum.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "v", geometry: nodes["mercedes_s-class_s580032"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "b", geometry: nodes["mercedes_s-class_s580033"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Тормозные колодки", geometry: nodes["mercedes_s-class_s580034"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "m", geometry: nodes["mercedes_s-class_s580035"].geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая дверь", geometry: nodes["mercedes_s-class_s580027"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Капот", geometry: nodes["mercedes_s-class_s580036"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая дверь", geometry: nodes["mercedes_s-class_s580037"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний бампер", geometry: nodes["mercedes_s-class_s580038"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний бампер", geometry: nodes["mercedes_s-class_s580039"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Лобовое стекло", geometry: nodes["mercedes_s-class_s580040"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое стекло", geometry: nodes["mercedes_s-class_s580041"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее стекло", geometry: nodes["mercedes_s-class_s580043"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая фара", geometry: nodes["mercedes_s-class_s580042"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое крыло", geometry: nodes["mercedes_s-class_s580031"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое крыло", geometry: nodes["mercedes_s-class_s580044"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний козырек", geometry: nodes["mercedes_s-class_s580045"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпуз правого зеркала", geometry: nodes["mercedes_s-class_s580046"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпус левого зеркала", geometry: nodes["mercedes_s-class_s580047"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая стойка", geometry: nodes["mercedes_s-class_s580048"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая стойка", geometry: nodes["mercedes_s-class_s580049"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний козырек", geometry: nodes["mercedes_s-class_s580050"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1t", geometry: nodes["mercedes_s-class_s580051"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1y", geometry: nodes["mercedes_s-class_s580052"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Багажник", geometry: nodes["mercedes_s-class_s580053"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая дверь", geometry: nodes["mercedes_s-class_s580054"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1o", geometry: nodes["mercedes_s-class_s580055"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое стекло", geometry: nodes["mercedes_s-class_s580056"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое стекло", geometry: nodes["mercedes_s-class_s580057"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая фара", geometry: nodes["mercedes_s-class_s580058"].geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Левая задняя фара", geometry: nodes["mercedes_s-class_s580059"].geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Правая задняя фара", geometry: nodes["mercedes_s-class_s580060"].geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Правая задняя доп. оптика", geometry: nodes["mercedes_s-class_s580061"].geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1f", geometry: nodes["mercedes_s-class_s580062"].geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний правый диск", geometry: nodes["mercedes_s-class_s580063"].geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний левый диск", geometry: nodes["mercedes_s-class_s580064"].geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний правый диск", geometry: nodes["mercedes_s-class_s580065"].geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Днище", geometry: nodes["mercedes_s-class_s580066"].geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1l", geometry: nodes["mercedes_s-class_s580067"].geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1;", geometry: nodes.LKSS_SIZE_16001_Mesh_2009.geometry, material: nodes.LKSS_SIZE_16001_Mesh_2009.material, position: [-63.65, 0, 0], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 1.93 }),
          /* @__PURE__ */ jsx("mesh", { name: "1z", geometry: nodes.LKSS_SIZE_028_Mesh_2010.geometry, material: nodes.LKSS_SIZE_028_Mesh_2010.material, position: [-63.65, 0, 0], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 1.93 })
        ]
      }
    )
  );
}
useGLTF.preload("/Sedan.glb");
function Model$1({ dispatch }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Hatchback.glb");
  const { width } = useWindowDimensions();
  const clickHandler = (e) => {
    let new_material = e.object.material.clone();
    let old_material = e.object.material.clone();
    new_material.color.setRGB(0.294117647, 0, 0.509803922);
    e.object.material = new_material;
    e.object.material.needsUpdate = true;
    dispatch(selectPart(e.object.name));
    setTimeout(() => {
      e.object.material = old_material;
    }, 200);
  };
  return (
    //@ts-ignore
    /* @__PURE__ */ jsxs(
      "group",
      {
        ref: group,
        dispose: null,
        onDoubleClick: width > 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        onClick: width < 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        children: [
          /* @__PURE__ */ jsx("mesh", { name: "12", geometry: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "13", geometry: nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry, material: nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.material, position: [-72.7, 0.53, 4.83], rotation: [1.83, -0.26, 0], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "14", geometry: nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.material, position: [-72.75, 0, 4.83], rotation: [1.83, 0.24, -0.13], scale: 2.05 }),
          /* @__PURE__ */ jsx("mesh", { name: "15", geometry: nodes["mercedes_s-class_s580"].geometry, material: materials["(null)"], position: [6.49, 0, 0], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "16", geometry: nodes.BMW.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Днище", geometry: nodes.BMW003.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "18", geometry: nodes.BMW004.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпус правого зеркала", geometry: nodes.BMW007.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое стекло", geometry: nodes.BMW008.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1e", geometry: nodes.BMW009.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1r", geometry: nodes.BMW010.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1t", geometry: nodes.BMW011.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1y", geometry: nodes.BMW012.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1u", geometry: nodes.BMW013.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1i", geometry: nodes.BMW014.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1o", geometry: nodes.BMW015.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1p", geometry: nodes.BMW016.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1[", geometry: nodes.BMW017.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1]", geometry: nodes.BMW018.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1a", geometry: nodes.BMW019.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1s", geometry: nodes.BMW020.geometry, material: materials["gum.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний левый диск", geometry: nodes.BMW021.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний правый диск", geometry: nodes.BMW022.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1g", geometry: nodes.BMW023.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1h", geometry: nodes.BMW024.geometry, material: materials["(null).001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Лобовое стекло", geometry: nodes.BMW025.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsxs("group", { rotation: [Math.PI / 2, 0, 0], scale: 0.49, children: [
            /* @__PURE__ */ jsx("mesh", { name: "Передний бампер", geometry: nodes.BMW027_1.geometry, material: materials.body_color }),
            /* @__PURE__ */ jsx("mesh", { name: "1l", geometry: nodes.BMW027_2.geometry, material: materials.body_color })
          ] }),
          /* @__PURE__ */ jsx("mesh", { name: "Капот", geometry: nodes.BMW028.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний бампер", geometry: nodes.BMW029.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее стекло", geometry: nodes.BMW030.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1v", geometry: nodes.BMW031.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1b", geometry: nodes.BMW033.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1n", geometry: nodes.BMW034.geometry, material: materials["(null).001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая ручка", geometry: nodes.BMW037.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1,", geometry: nodes.BMW038.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое крыло", geometry: nodes.BMW039.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая фара", geometry: nodes.BMW035.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое стекло", geometry: nodes.BMW041.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Молдинг хром", geometry: nodes.BMW026.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1к", geometry: nodes.BMW001.geometry, material: materials.black_plastic_gloss, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1е", geometry: nodes.BMW040.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая дверь", geometry: nodes.BMW036.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая дверь", geometry: nodes.BMW042.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая ручка", geometry: nodes.BMW044.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая ручка", geometry: nodes.BMW045.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая ручка", geometry: nodes.BMW046.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое крыло", geometry: nodes.BMW047.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое крыло", geometry: nodes.BMW048.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Багажник", geometry: nodes.BMW049.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ч", geometry: nodes.BMW051.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое крыло", geometry: nodes.BMW052.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1м", geometry: nodes.BMW053.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1и", geometry: nodes.BMW054.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Крыша", geometry: nodes.BMW056.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое стекло", geometry: nodes.BMW050.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое стекло", geometry: nodes.BMW055.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ю", geometry: nodes.BMW057.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Матовый пластик", geometry: nodes.BMW058.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Шильдики", geometry: nodes.BMW059.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая фара", geometry: nodes.BMW060.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая доп. оптика", geometry: nodes.BMW061.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая доп. оптика", geometry: nodes.BMW062.geometry, material: materials["Rg2Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний левый диск", geometry: nodes.BMW002.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "н1", geometry: nodes.BMW063.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний правый диск", geometry: nodes.BMW064.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "ш1", geometry: nodes.BMW065.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая фара", geometry: nodes.BMW066.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая фара", geometry: nodes.BMW067.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "х1", geometry: nodes.BMW068.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задня правая доп. оптика", geometry: nodes.BMW069.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая доп. оптика", geometry: nodes.BMW070.geometry, material: materials["Rg1Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "ч1", geometry: nodes.BMW071.geometry, material: materials.black_plastic_matt, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "м1", geometry: nodes.BMW073.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "и1", geometry: nodes.BMW074.geometry, material: materials["Meshpart12Mtl.001"], rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпус левого зеркала", geometry: nodes.BMW075.geometry, material: materials.body_color, rotation: [Math.PI / 2, 0, 0], scale: 0.49 }),
          /* @__PURE__ */ jsx("mesh", { name: "ь1", geometry: nodes.LKSS_SIZE_16001_Mesh_2009.geometry, material: nodes.LKSS_SIZE_16001_Mesh_2009.material, position: [-63.65, 0, 0], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 1.93 }),
          /* @__PURE__ */ jsx("mesh", { name: "б1", geometry: nodes.LKSS_SIZE_028_Mesh_2010.geometry, material: nodes.LKSS_SIZE_028_Mesh_2010.material, position: [-63.65, 0, 0], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 1.93 })
        ]
      }
    )
  );
}
useGLTF.preload("/Hatchback.glb");
function Model({ dispatch }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Jeep.glb");
  const { width } = useWindowDimensions();
  const clickHandler = (e) => {
    let new_material = e.object.material.clone();
    let old_material = e.object.material.clone();
    new_material.color.setRGB(0.294117647, 0, 0.509803922);
    e.object.material = new_material;
    e.object.material.needsUpdate = true;
    dispatch(selectPart(e.object.name));
    setTimeout(() => {
      e.object.material = old_material;
    }, 200);
  };
  return (
    //@ts-ignore
    /* @__PURE__ */ jsxs(
      "group",
      {
        ref: group,
        dispose: null,
        onDoubleClick: width > 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        onClick: width < 630 ? (e) => {
          e.stopPropagation();
          clickHandler(e);
        } : null,
        children: [
          /* @__PURE__ */ jsx("mesh", { name: "12", geometry: nodes.Car_Body.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsxs("group", { position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02, children: [
            /* @__PURE__ */ jsx("mesh", { name: "Шильдик", geometry: nodes.Car_Front_Emblem_1.geometry, material: materials["Rg2Mtl.001"] }),
            /* @__PURE__ */ jsx("mesh", { name: "Шильдики модели", geometry: nodes.Car_Front_Emblem_2.geometry, material: materials["Meshpart12Mtl.001"] })
          ] }),
          /* @__PURE__ */ jsx("mesh", { name: "15", geometry: nodes.Car_Number_Front.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Молднинг хром", geometry: nodes.Car_Front_Aluminum.geometry, material: materials["Meshpart12Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Днище", geometry: nodes.Car_Bottom.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая фара", geometry: nodes.Car_Headlight_Glass.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "11", geometry: nodes.Car_Headlight_Chrome.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1a", geometry: nodes.Car_Headlight_bmwlaser_Left.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1s", geometry: nodes.Car_Headlight_bmwlaser_Right.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1d", geometry: nodes.Car_Headlights.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1f", geometry: nodes.Car_Headlight_Blue.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1g", geometry: nodes.Car_Headlight_Fog.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1h", geometry: nodes.Car_Headlight_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1j", geometry: nodes.Car_Tail_Light_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая доп. оптика", geometry: nodes.Car_Tail_Light_Glass.geometry, material: materials["Rg1Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1l", geometry: nodes.Car_Tail_Light_Chrome.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1;", geometry: nodes.Car_Tail_Lights.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1z", geometry: nodes.Car_Tail_light_bmw_Left.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1x", geometry: nodes.Car_Tail_light_bmw_Right.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsxs("group", { position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02, children: [
            /* @__PURE__ */ jsx("mesh", { name: "Матовый пластик", geometry: nodes.Car_Black_1.geometry, material: materials.black_plastic_gloss }),
            /* @__PURE__ */ jsx("mesh", { name: "Нижняя решетка радиатора", geometry: nodes.Car_Black_2.geometry, material: materials.black_plastic_matt })
          ] }),
          /* @__PURE__ */ jsx("mesh", { name: "1b", geometry: nodes.Car_Rubbers.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1n", geometry: nodes.Car_Door_Lock_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1m", geometry: nodes.Car_Interior_Base.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1,", geometry: nodes.Car_Seats_Belt_Fabric.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1.", geometry: nodes.Car_Interior_Mirror.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1/", geometry: nodes.Car_Seats_Belt_Red.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1q", geometry: nodes.Car_Seats_Belt_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1w", geometry: nodes.Car_Seats_Belt_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1e", geometry: nodes.Car_Pedals_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1r", geometry: nodes.Car_Interior_Fabric.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1t", geometry: nodes.Car_Pedals_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1y", geometry: nodes.Car_Interior_Leather_Orange.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1u", geometry: nodes.Car_Interior_Wood.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1i", geometry: nodes.Car_Interior_Light_Glass.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1o", geometry: nodes.Car_Interior_Light_Chrome.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1p", geometry: nodes.Car_Interior_Black.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1[", geometry: nodes.Car_Interior_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1]", geometry: nodes.Car_Interior_Aluminum.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ц", geometry: nodes.Car_Textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1у", geometry: nodes.Car_Alu_textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1к", geometry: nodes.Car_xDrive_Emblem_Black.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1е", geometry: nodes.Car_Wheel_FL_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1н", geometry: nodes.Car_Wheel_FL_Caliper.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1г", geometry: nodes.Car_Wheel_FL_Brake_Disk.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Шины", geometry: nodes.Car_Wheel_FL_Tire.geometry, material: materials["gum.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1щ", geometry: nodes.Car_Wheel_FL_M.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1з", geometry: nodes.Car_Door_FL_Rubber.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1х", geometry: nodes.Car_Door_FL_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ъ", geometry: nodes.Car_Door_FL_Interior_Base.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ф", geometry: nodes.Car_Door_FL_Aluminum.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ы", geometry: nodes.Car_Door_FL_Wood.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1а", geometry: nodes.Car_Door_FL_Light_Chrome.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1п", geometry: nodes.Car_Door_FL_Mirror.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1р", geometry: nodes.Car_Door_FL_Interior_Orange.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1о", geometry: nodes.Car_Door_FL_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1л", geometry: nodes.Car_Door_FL_buttons.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1д", geometry: nodes.Car_Door_FL_Alu_textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая дверь", geometry: nodes.Car_Door_RL_Body.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Центральное левое стекло", geometry: nodes.Car_Door_RL_Window.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1я", geometry: nodes.Car_Door_RL_Rubber.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ч", geometry: nodes.Car_Door_RL_Interior_Base.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1с", geometry: nodes.Car_Door_RL_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1м", geometry: nodes.Car_Door_RL_Aluminum.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1и", geometry: nodes.Car_Door_RL_Wood.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1т", geometry: nodes.Car_Door_RL_Interior_Orange.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ь", geometry: nodes.Car_Door_RL_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1б", geometry: nodes.Car_Door_RL_Alu_textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ю", geometry: nodes.Car_SW_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1.", geometry: nodes.Car_SW_Logo.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "111", geometry: nodes.Car_SW_Aluminum.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "112", geometry: nodes.Car_SW_Textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "113", geometry: nodes.Car_SW_Alu_textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "133", geometry: nodes.Car_Seat_FL_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "122", geometry: nodes.Car_Seat_FL_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "144", geometry: nodes.Car_Seat_FL_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "155", geometry: nodes.Car_Seat_FL_Textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "166", geometry: nodes.Car_Seat_FL_Alu_Texture.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "177", geometry: nodes.Car_Seats_Mid_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "188", geometry: nodes.Car_Seats_Mid_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "199", geometry: nodes.Car_Seats_Mid_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "100", geometry: nodes.Car_Seats_Mid_Fabric.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1--", geometry: nodes.Car_Seats_Mid_Textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1йй", geometry: nodes.Car_Seats_Mid_Alu_texture.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1цц", geometry: nodes.Car_Seats_Rear_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1уу", geometry: nodes.Car_Seats_Rear_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1кк", geometry: nodes.Car_Seats_Rear_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ее", geometry: nodes.Car_Seats_Rear_Fabric.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1нн", geometry: nodes.Car_Wheel_FR_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1гг", geometry: nodes.Car_Wheel_FR_Caliper.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1шш", geometry: nodes.Car_Wheel_FR_Brake_Disk.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1щщ", geometry: nodes.Car_Wheel_FR_M.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1зз", geometry: nodes.Car_Wheel_RL_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1хх", geometry: nodes.Car_Wheel_RL_Brake_Disk.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ъъ", geometry: nodes.Car_Wheel_RL_M.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1фф", geometry: nodes.Car_Wheel_RL_Caliper.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ыы", geometry: nodes.Car_Wheel_RR_Caliper.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1вв", geometry: nodes.Car_Wheel_RR_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Диски", geometry: nodes.Car_Wheel_RR_Bolts.geometry, material: materials["Meshpart12Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1пп", geometry: nodes.Car_Wheel_RR_Brake_Disk.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1рр", geometry: nodes.Car_Wheel_RR_M.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая дверь", geometry: nodes.Car_Door_FR_Body.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1лл", geometry: nodes.Car_Door_FR_Rubber.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1дд", geometry: nodes.Car_Door_FR_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1жж", geometry: nodes.Car_Door_FR_Interior_Base.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое стекло", geometry: nodes.Car_Door_FR_Window.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1яя", geometry: nodes.Car_Door_FR_Aluminum.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1чч", geometry: nodes.Car_Door_FR_Wood.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1мм", geometry: nodes.Car_Door_FR_Light_Chrome.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ии", geometry: nodes.Car_Door_FR_Mirror.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1тт", geometry: nodes.Car_Door_FR_Interior_Orange.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ьь", geometry: nodes.Car_Door_FR_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1бб", geometry: nodes.Car_Door_FR_Alu_textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1юю", geometry: nodes.Car_Door_RR_Rubber.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1..", geometry: nodes.Car_Door_RR_Interior_Base.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1йц", geometry: nodes.Car_Door_RR_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1фы", geometry: nodes.Car_Door_RR_Aluminum.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1яч", geometry: nodes.Car_Door_RR_Wood.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1цу", geometry: nodes.Car_Door_RR_Interior_Orange.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ыв", geometry: nodes.Car_Door_RR_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1чс", geometry: nodes.Car_Door_RR_Alu_textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ук", geometry: nodes.Car_Seat_FR_Leather.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ва", geometry: nodes.Car_Seat_FR_Metal.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1см", geometry: nodes.Car_Seat_FR_Plastic.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1ен", geometry: nodes.Car_Seat_FR_Textures.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1пр", geometry: nodes.Car_Seat_FR_Alu_Texture.geometry, material: materials.black_plastic_matt, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1гш", geometry: nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ло", geometry: nodes.Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "1ва", geometry: nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "ф1", geometry: nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "к1", geometry: nodes.Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "е1", geometry: nodes.Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "н1", geometry: nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: materials.black_plastic_matt, position: [0, 0, 3.34], rotation: [Math.PI / 2, 0, 0], scale: 0.24 }),
          /* @__PURE__ */ jsx("mesh", { name: "щ1", geometry: nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "з1", geometry: nodes.Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "а1", geometry: nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "р1", geometry: nodes.Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "ж1", geometry: nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry, material: materials["(null)"], position: [0, 0, 3.34], rotation: [Math.PI / 2, 0, 0], scale: 0.24 }),
          /* @__PURE__ */ jsx("mesh", { name: "э1", geometry: nodes.Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "ч1", geometry: nodes.Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "и1", geometry: nodes.Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "т1", geometry: nodes.Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "ь1", geometry: nodes.Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "ю1", geometry: nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: ".1", geometry: nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry, material: materials.black_plastic_gloss, position: [0, 0, 13.53], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "ап1", geometry: nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "по1", geometry: nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "q1", geometry: nodes.Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry, material: materials.body_color, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "r1", geometry: nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "i1", geometry: nodes.Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry, material: materials.black_plastic_matt, position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "p1", geometry: nodes.LKSS_SIZE_16001_Mesh_2009.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "f1", geometry: nodes.LKSS_SIZE_028_Mesh_2010.geometry, material: materials["(null)"], position: [0, 0, 71.29], rotation: [Math.PI / 2, 0, 0] }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее стекло", geometry: nodes.Car_Window001.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "h1", geometry: nodes.Car_Window002.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Капот", geometry: nodes.Car_Body001.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передний бампер", geometry: nodes.Car_Body002.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задний бампер", geometry: nodes.Car_Body003.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Лобовое стекло", geometry: nodes.Car_Window003.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее правое крыло", geometry: nodes.Car_Body004.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое крыло", geometry: nodes.Car_Body005.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Козырек", geometry: nodes.Car_Body006.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Левая стойка", geometry: nodes.Car_Body007.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Правая стойка", geometry: nodes.Car_Body008.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое крыло", geometry: nodes.Car_Body009.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое крыло", geometry: nodes.Car_Body010.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Багажник", geometry: nodes.Car_Body011.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "11ads", geometry: nodes.Car_Body012.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая ручка", geometry: nodes.Car_Door_RL_Body001.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая дверь", geometry: nodes.Car_Door_RL_Body002.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая ручка", geometry: nodes.Car_Door_RL_Body003.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая ручка", geometry: nodes.Car_Door_FR_Body001.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Корпус левого зеркала", geometry: nodes.Car_Door_FR_Body002.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая ручка", geometry: nodes.Car_Door_FR_Body003.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Копрус правого зеркала", geometry: nodes.Car_Door_FR_Body004.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая дверь", geometry: nodes.Car_Door_FR_Body005.geometry, material: materials.body_color, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее правое стекло", geometry: nodes.Car_Window004.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "1asd1a", geometry: nodes.Car_Window005.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Люк", geometry: nodes.Car_Window006.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Заднее левое стекло", geometry: nodes.Car_Window007.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Центральное правое стекло", geometry: nodes.Car_Door_RL_Window001.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Переднее левое стекло", geometry: nodes.Car_Door_FR_Window001.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая фара", geometry: nodes.Car_Headlight_Glass001.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя правая доп. оптика", geometry: nodes.Car_Headlight_Glass002.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Передняя левая доп. оптика", geometry: nodes.Car_Headlight_Glass003.geometry, material: materials["Rg2Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая фара", geometry: nodes.Car_Tail_Light_Glass001.geometry, material: materials["Rg1Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя левая доп. оптика", geometry: nodes.Car_Tail_Light_Glass002.geometry, material: materials["Rg1Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Задняя правая фара", geometry: nodes.Car_Tail_Light_Glass003.geometry, material: materials["Rg1Mtl.001"], position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 }),
          /* @__PURE__ */ jsx("mesh", { name: "Выхлопные трубы", geometry: nodes.Car_Black001.geometry, material: materials.black_plastic_gloss, position: [0, 0, 0.13], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 0.02 })
        ]
      }
    )
  );
}
useGLTF.preload("/Jeep.glb");
const Object__selected = "_Object__selected_1p0ld_8";
const Object__nav = "_Object__nav_1p0ld_30";
const active = "_active_1p0ld_51";
const Object__item = "_Object__item_1p0ld_60";
const classes = {
  "Object": "_Object_1p0ld_4",
  Object__selected,
  "Object__selected-title": "_Object__selected-title_1p0ld_14",
  "Object__selected-item": "_Object__selected-item_1p0ld_18",
  Object__nav,
  "Object__nav-item": "_Object__nav-item_1p0ld_39",
  active,
  Object__item
};
const Object$1 = () => {
  const [current, setCurrent] = useState(0);
  const dispatch = useAppDispatch();
  const clickHandler = (i, index) => {
    setCurrent(index);
    dispatch(selectCar(i));
  };
  const { selectedService, selectedCar, selectedParts } = useAppSelector(
    (state) => state.basketReducer
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: classes["Object"], children: [
    /* @__PURE__ */ jsxs("div", { className: classes["Object__selected"], children: [
      /* @__PURE__ */ jsxs("div", { className: classes["Object__selected-title"], children: [
        " ",
        /* @__PURE__ */ jsx("br", {}),
        " Выбрано:"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes["Object__selected-item"], children: [
        "Тип кузова: ",
        /* @__PURE__ */ jsxs("div", { children: [
          " ",
          selectedCar,
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes["Object__selected-item"], children: [
        "Услуга: ",
        /* @__PURE__ */ jsxs("div", { children: [
          selectedService,
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: classes["Object__selected-item"], children: [
        "Детали: ",
        /* @__PURE__ */ jsxs("div", { children: [
          selectedParts.join(", "),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: classes["Object__selected-item-button"], children: /* @__PURE__ */ jsxs(UIButton, { type: "outline", onClick: () => dispatch(basketAppend()), children: [
        /* @__PURE__ */ jsx(FaPlus, {}),
        " Добавить в корзину"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: classes["Object__selected-item-hint"], children: /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "Соберите ваш пакет услуг:" }),
        " ",
        /* @__PURE__ */ jsx("br", {}),
        " ",
        /* @__PURE__ */ jsx("br", {}),
        "1. Выберите услугу из дерева услуг.",
        /* @__PURE__ */ jsx("br", {}),
        "2. Выберите ваш тип кузова. ",
        /* @__PURE__ */ jsx("br", {}),
        "3. Вращайте 3D модель автомобиля, двойным кликом выберите нужную часть/части авто."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: classes["Object__item"], children: /* @__PURE__ */ jsxs(
      Canvas,
      {
        shadows: true,
        dpr: [1, 2],
        camera: { position: [5, 50, 30], fov: 3 },
        children: [
          /* @__PURE__ */ jsx("ambientLight", { intensity: 0.3 }),
          /* @__PURE__ */ jsx(
            "spotLight",
            {
              intensity: 0.3,
              angle: 0.1,
              penumbra: 1,
              position: [5, 25, 20]
            }
          ),
          /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
            current === 0 && /* @__PURE__ */ jsx(Model$2, { dispatch }),
            current === 1 && /* @__PURE__ */ jsx(Model$1, { dispatch }),
            current === 2 && /* @__PURE__ */ jsx(Model, { dispatch }),
            current === 3 && /* @__PURE__ */ jsx(Model$3, { dispatch }),
            /* @__PURE__ */ jsx(Environment, { preset: "city" })
          ] }),
          /* @__PURE__ */ jsx(
            OrbitControls,
            {
              minPolarAngle: Math.PI / 2,
              maxPolarAngle: Math.PI / 2,
              enableZoom: true,
              enablePan: true,
              target: [0, 1, 0]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: classes["Object__nav"], children: ["Седан", "Хетчбэк", "Джип", "Микроавтобус"].map((i, index) => /* @__PURE__ */ jsxs(
      "p",
      {
        onClick: () => clickHandler(i, index),
        className: index === current ? classes["Object__nav-item"] + " " + classes["active"] : classes["Object__nav-item"],
        children: [
          "   ",
          i,
          "   "
        ]
      },
      index
    )) })
  ] }) });
};
const App = () => {
  const IntroRef = useRef(null);
  const ContactsRef = useRef(null);
  const ServicesRef = useRef(null);
  const PortfolioRef = useRef(null);
  const InformationRef = useRef(null);
  const ReviewsRef = useRef(null);
  const IntroScroll = () => IntroRef.current.scrollIntoView({ block: "start" });
  const ContactsScroll = () => ContactsRef.current.scrollIntoView(true);
  const ServicesScroll = () => ServicesRef.current.scrollIntoView(true);
  const PortfolioScroll = () => PortfolioRef.current.scrollIntoView(true);
  const InformationScroll = () => InformationRef.current.scrollIntoView(true);
  const ReviewsScroll = () => ReviewsRef.current.scrollIntoView(true);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Header,
      {
        IntroScroll,
        ContactsScroll,
        ServicesScroll,
        PortfolioScroll,
        InformationScroll,
        ReviewsScroll
      }
    ),
    /* @__PURE__ */ jsx(Space, {}),
    /* @__PURE__ */ jsx(Intro, { refProp: IntroRef }),
    /* @__PURE__ */ jsxs(Layout, { children: [
      /* @__PURE__ */ jsx(Services, { refProp: ServicesRef }),
      /* @__PURE__ */ jsx(Object$1, {}),
      /* @__PURE__ */ jsx(PortfolioMenu, { refProp: PortfolioRef }),
      /* @__PURE__ */ jsx(Reviews, { refProp: ReviewsRef }),
      /* @__PURE__ */ jsx(Information, { refProp: InformationRef }),
      /* @__PURE__ */ jsx(Action, {}),
      /* @__PURE__ */ jsx(Contacts, { refProp: ContactsRef })
    ] }),
    /* @__PURE__ */ jsx(Modals, {}),
    /* @__PURE__ */ jsx(UINotification, {})
  ] });
};
const rootReducer = combineReducers({
  reviewReducer,
  offerReducer,
  serviceReducer,
  basketReducer,
  modalReducer: basketModalReducer,
  basketModalReducer
});
const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
const render = () => {
  const store = setupStore();
  const html = ReactDOM.renderToString(
    /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(App, {}) })
  );
  const state = store.getState();
  return { html, state };
};
export {
  render
};
