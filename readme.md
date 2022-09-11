# Save Your Money (SYM)

## RU Descriptions

1. Какие задачи решает приложение
2. Как приложение решает задачи
3. Функционал


### 1. Какие задачи решает приложение

Приложение SYM разрабатывается с целью повышения качества контроля собственных финансов своих пользователей.

Система предполагает использование краткой информации о пользователе, связанной, исключительно с финасами.

Данный к использованию: 
1. Общая сумма имеющихся денежных средств
2. Дата основного притока средств (Зарплата, например)
3. Информация о потоке средств, внесённая пользователем.
    Информация о потоке средств включает:
    - Внесение
    - Сохранение
    - Траты

### 2. Как приложение решает задачи

#### Кратко.
Приложение рассчитывает допустимые ежедневные траты, сохраняет статистику м даёт рекомендации.

#### Подробности
Алгоритм SYM использует в качестве ключевой даты день основного притока средств пользователя.
/
В качестве даты выбирается дата установленная пользователем или устанавливается дефолтное значение (первое число месяца).
Калькуляторы приложения работают опираясь на _ключевую дату_. Согласно _формуле_, ежедневно высчитывается допустимая сумма трат на текущий день.

**Понятия**:
1. _Ключевая/оперативная дата_ - день зарплаты, пенсия или процент с депозита или акций и т.д.
2. _Формула_ - расчёт идёт по формуле __Текущее количество средств / количество дней до *ключевой даты*__


### 3. Функционал

В приложении присутствуют следующие функции:

1. Установка **_ключевой_** даты
2. **Внесение** - пополнение счёта внутри приложения
3. **Сохранение** - списание, посредством сохранения (откладывания) средств
4. **Расход** - окончательное списание средств
5. Статистика в виде кольцевой диаграммы, списка, календаря
6. Интерактивный календарь
