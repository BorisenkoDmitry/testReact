# Тестовый проект
----
## Структура проекта:
* Компонент header
    * Компонент залогиненного пользователя LoggedIn
    * Компонент логотипа

* PAGES - страницы сайта
    * Страница Животных
    * Страница домашняя (главная)
    * Страница Сегодня
    * Страница входа в аккаунт Login
* store - папка с хранилищем react-redux
    * асинхронные функции
    * Редюсеры  - экшены и стейты
    * файл index.js которые комбинирует все редюсеры и перекидывает общий store в react

* UI - тут находятся кнопки, container, section, поля

----
## Что выполнил?
* Вход в личный кабинет, с валидацией форм. Мог подключить justvalidate, нестал, просто написал простую проверку
* Возможность переходить на страница Сегодня, с расписанием животных на Сегодня
* Возможность переходить на страницу всех животных
* Пагинкция на странице животных, в сторе можно управлять количеством показываемых животных, автоматически будет пересчитываться и пагинация и запрос на сервак
* По клику на каждого животного на двух страницах открывается Popup с актуальной информацией животного, есть проверка вывод если какая то характирстика отсутствует

----
## Что использовал?
* react
* redux 
* react-router-dom
* gsap
* axios
* css (думал scss, не стал). Вообще нужно было использовать возможно модульные классы с хэшированием. 

К сожалению из за основной нагрузки по работе выполнял долго, плюс переделывал все один раз:). Возможно, что то можно было реализовать лучше, простите новичка:)