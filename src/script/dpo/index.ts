import {DPO} from './DPO'
import {Department} from '../../types/dpo.types'
import './validateForm'

const placeholder: Department = {
    ['IT-Сфера']: {
        options: {
            circleColor: '#cbdee4'
        },
        items: [
            {
                title: 'Разработка мобильных приложений',
                describe: 'Разработка приложений для мобильных устройств — это процесс, при котором приложения разрабатываются для небольших портативных устройств, таких, как КПК, смартфоны или сотовые телефоны. Эти приложения могут быть предустановлены на устройство в процессе производства, загружены пользователем с помощью различных платформ для распространения ПО или являться веб-приложениями, которые обрабатываются на стороне клиента (JavaScript) или сервера.',
                image: 'img/it.jpg',
                price: 3000,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Web-дизайн',
                describe: 'WEB-разработка — процедура создания WEB-приложения или WEB-сайта. Основными этапами этого процесса являются такие мероприятия, как WEB-дизайн, вёрстка страниц сайта, WEB-программирование на стороне сервера и клиента, а также работы по конфигурированию WEB-сервера',
                image: 'img/it.jpg',
                price: 3000,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Обработка цифровой информации',
                describe: 'Программа ориентирована на желающих разобраться и погрузиться в постоянно меняющееся окружающее нас цифровое пространство. В этом курсе слушатели научатся: обработке текста в современном текстовом процессоре; работе и обработке цифровой информации в электронных таблицах; вводу, редактированию и актуализации информации в базах данных; сканированию и распознаванию текстовых документов; сканированию и обработке графических изображений; размещению, редактированию и актуализации цифровой информацию на сайте с помощью системы управления контентом CMS.\n' +
                    '<br/>Программа предназначена для специалистов, желающих научиться собирать информацию, редактировать и актуализировать цифровую информацию при создании цифровых информационных ресурсов.\n',
                image: 'img/it.jpg',
                price: 3000,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            }
        ]
    },
    ['Химические технологии']: {
        options: {
            circleColor: '#fdfdbf'
        },
        items: [
            {
                title: 'Экспертиза качества сырья и готовой продукции',
                describe: 'Экспертиза качества — это специальное исследование, проводимое по инициативе продавца или покупателя, с целью оценки качества товара или определения причин возникновения дефектов. Проводить экспертизу качества имеют право только эксперты аккредитованных испытательных лабораторий. Программа направлена на изучение обучающимися теоретических знаний и приобретение практических навыков и умений в сфере экспертизы качества. ',
                image: 'img/him.jpg',
                price: 4100,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Основы технологии фармацевтического производства',
                describe: 'Программа рассматривает взаимосвязь химической структуры и фармакологической активности лекарственных средств; промышленный способ получения лекарственных средств, технологические схемы производства лекарственных препаратов и аппаратурное оформление; требования правил надлежащей производственной практики (GMP) к производству и контролю качества лекарственных средств; стандартизацию лекарственных средств и валидацию методов их анализа и производства.',
                image: 'img/him.jpg',
                price: 5700,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Лабораторный химический анализ',
                describe: 'Программа «Лабораторный химический анализ» предназначена для обучающихся, проявляющих повышенный интерес к химии и собирающихся продолжить образование в учебных заведениях естественнонаучного профиля. Суть программы заключается в сочетании различных форм работы, направленных на углубление у обучающихся основ химического анализа, умения выбирать методы проведения химического анализа, производить основные лабораторные операции и осуществлять расчеты содержания компонентов исследуемых объектов.',
                image: 'img/him.jpg',
                price: 5300,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Основы микробиологического анализа',
                describe: 'Программа предполагает ряд лабораторных работ, где обучающиеся узнают биологические свойства микроорганизмов, научатся, работая с оптическими приборами – микроскопами, самостоятельно готовить препараты для микроскопии, делать посевы, проводить первичную идентификацию микроорганизмов.',
                image: 'img/him.jpg',
                price: 5200,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
			{
                title: 'Основы культивирования клеток',
                describe: 'Культивирование клеток — это процесс искусственного размножения и выращивания живых клеток в контролируемых условиях в лаборатории. Этот метод позволяет изучить особенности клеточного поведения, проводить различные эксперименты и производить медицинские и биотехнологические исследования.\nПрограмма предназначена для получения слушателями знаний в областях работы с культурами клеток живых организмов; приготовления питательных сред; стерилизации материалов и инструментов; эксплуатации биотехнологического оборудования; техники безопасности в биотехнологических лабораториях.',
                image: 'img/him.jpg',
                price: 6700,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
        ]
    },
    ['Правовое']: {
        options: {
            circleColor: '#c0a2be'
        },
        items: [
            {
                title: 'Управление персоналом',
                describe: 'Управление персоналом – это практическая деятельность, которая направлена на обеспечение предприятия квалифицированным персоналом, способным качественно выполнять возложенные на него трудовые функции, и оптимальное использование кадрами. Управление персоналом является одной из основных составных частей современного менеджмента.',
                image: 'img/3.jpg',
                price: 3000,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Справочно-правовые системы в профессиональной деятельности',
                describe: 'Справочно-правовые системы (информационно-правовые системы) — класс компьютерных баз данных, содержащих тексты указов, постановлений и решений различных государственных органов. Подкрепленные нормативными документами, они также содержат консультации специалистов по праву, бухгалтерскому и налоговому учету, судебные решения, типовые формы деловых документов и др.',
                image: 'img/3.jpg',
                price: 3300,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Страховые операции в профессиональной деятельности',
                describe: 'Программа направлена на освоение знаний и практических навыков по использованию методов страховой защиты, понять возможности страхового дела, стать активным и эффективным субъектом страховых отношений.\n' +
                    'Смысл страхования состоит в минимизации ущерба при наступлении неблагоприятных обстоятельств, сопряженных с убытками.\n',
                image: 'img/3.jpg',
                price: 2700,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
			{
                title: 'Охрана труда руководителей и специалистов организации',
                describe: 'Программа направлена на получение знаний в области обеспечения требований охраны труда и промышленной безопасности, а также предупреждения производственного травматизма, социальной защиты пострадавших от несчастных случаев на производстве и профессиональных заболеваний.',
                image: 'img/3.jpg',
                price: 2700,
                hours: {
                    regular: 72,
                    advanced: 20
                }
            }
        ]
    },
    ['Техническое']: {
        options: {
            circleColor: '#e3aeb8'
        },
        items: [
            {
                title: 'Система автоматизированного проектирования – программа «Компас»',
                describe: 'Программа направлена на формирование у обучающихся профессиональных навыков работы на персональном компьютере, пользования устройствами ввода-вывода и носителями данных, применения стандартного программного обеспечения, создания и обработки различных учебных и конструкторских документов и чертежей.\n' +
                    'Система «Компас-3D» предназначена для создания трёхмерных ассоциативных моделей отдельных деталей (в том числе, деталей, формируемых из листового материала путём его гибки) и сборочных единиц, содержащих как оригинальные, так и стандартизованные конструктивные элементы. Параметрическая технология позволяет быстро получать модели типовых изделий на основе проектированного ранее прототипа. Многочисленные сервисные функции облегчают решение вспомогательных задач проектирования и обслуживания производства.\n',
                image: 'img/5.jpg',
                price: 5700,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Основы прототипирования (3D принтер)',
                describe: 'Принцип работы технологии заключается в создании физического объекта на основе цифровой 3D-модели. Сначала создается CAD-модель, а затем происходит печать на 3D-принтере',
                image: 'img/5.jpg',
                price: 3100,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Механосборочные работы',
                describe: 'Программа предназначена для получения слушателями знаний и практических навыков по сборке и наладке всех типов механических передач, сборочных узлов и механизмов, а также для осуществления необходимых расчетов для определения параметров зубчатых зацеплений, редукторов.',
                image: 'img/5.jpg',
                price: 3700,
                hours: {
                    regular: 32,
                    advanced: 20
                }
            }
        ]
    },
    ['Финансово-экономическое']: {
        options: {
            circleColor: '#69bdbf'
        },
        items: [
            {
                title: 'Программа 1C: Бухгалтерия',
                describe: 'Программа 1С Бухгалтерия - это самая популярная программа для бухгалтерского учета, самое известное решение фирмы 1С. Программа 1С: Бухгалтерия предназначена для автоматизации бухгалтерского и налогового учета, простого кадрового и зарплатного учета. С помощью Программы 1С: Бухгалтерия можно подготовить и сдать отчетность компании или индивидуального предпринимателя.',
                image: 'img/4.jpg',
                price: 3300,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Кассовые операции',
                describe: 'Программа нацелена на изучение признаков платежеспособности банкнот и монеты Банка России, работа на оборудовании для проверки и пересчёта банкнот и монеты. Изучение алгоритма действий при обнаружении фальшивых купюр, что такое кассовая дисциплина и как с ней работают, работа с онлайн кассами.',
                image: 'img/4.jpg',
                price: 2900,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Бизнес-планирование',
                describe: 'Эффективное развитие практически любого предприятия в современных условиях невозможно без разработки бизнес-плана. Бизнес-планирование дает возможность определить оптимальный вариант развития предприятия на ближайшие и отдаленные периоды в соответствии с параметрами рынка и возможностями получения необходимых ресурсов.' +
                    '<br/> Программа предназначена для слушателей, желающих повысить свою квалификацию, а также для руководителей предприятий, владельцев бизнеса, специалистов в сфере экономики и менеджмента.',
                image: 'img/4.jpg',
                price: 3600,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            },
            {
                title: 'Программа 1C: Управление торговлей',
                describe: 'Программа 1С: Управление торговлей — это программа для оптовой и розничной торговли. Позволяет в комплексе автоматизировать управление продажами и финансами, складом, закупками, запасами. В «Программа 1С: Управление торговлей» удобно реализован торговый, складской, финансовый, оперативный и управленческий учет, а также работа с клиентами. «Программа 1С: Управление торговлей 11» является обновленной версией решения «Программа 1С: Торговля и склад».',
                image: 'img/4.jpg',
                price: 3300,
                hours: {
                    regular: 36,
                    advanced: 20
                }
            }
        ]
    }
}

new DPO(placeholder)
