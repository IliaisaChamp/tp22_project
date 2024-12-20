import { CardPathKey } from '../types';

export const DATABASE: Record<CardPathKey, string[]> = {
  [CardPathKey.PRODUCT_MANAGER]: [
    'Продакт-менеджер — это стратег, который просчитывает ресурсы, ставит цели, проводит клиентские исследования, проверяет гипотезы и изучает конкурентов.',
    'Product Roadmap (Дорожная карта продукта) — документ или визуальный план, который отображает стратегию развития продукта, его ключевые этапы и сроки выполнения.',
    'MVP (Minimum Viable Product) — минимально жизнеспособный продукт, содержащий только основные функции, необходимые для проверки гипотезы и получения обратной связи от пользователей.',
    'Customer Journey (Путь пользователя) — последовательность этапов, через которые проходит пользователь при взаимодействии с продуктом, начиная с осознания его существования и заканчивая лояльностью.',
    'KPIs (Key Performance Indicators) — ключевые показатели эффективности, используемые для измерения успеха продукта в достижении бизнес-целей.',
    'User Persona (Персона пользователя) — собирательный образ целевого пользователя, основанный на исследованиях, который помогает лучше понять потребности и поведение аудитории.',
    'Backlog (Бэклог) — список всех задач, идей и требований, которые должны быть выполнены для разработки и улучшения продукта.',
    'Stakeholders (Заинтересованные стороны) — люди или группы, которые влияют на продукт или зависят от его успеха (например, пользователи, инвесторы, команда разработки).',
    'A/B Testing — метод тестирования, при котором пользователям предлагаются две версии одного элемента продукта (например, кнопки или страницы) для определения более эффективного варианта.',
    'Retention Rate (Уровень удержания) — показатель, демонстрирующий, какой процент пользователей продолжает использовать продукт через определённый период времени.',
  ],
  [CardPathKey.ANALYST]: [
    'Бизнес-аналитик (Business Analyst) — специалист, который анализирует бизнес-требования, выявляет проблемы, улучшает процессы и помогает разработчикам понять цели бизнеса.',
    'Системный аналитик (Systems Analyst) — эксперт, который изучает и описывает технические требования системы, разрабатывает техническую документацию и координирует работу между бизнесом и разработкой.',
    'Продуктовый аналитик (Product Analyst) — аналитик, отвечающий за анализ данных, связанных с использованием продукта, для улучшения пользовательского опыта и достижения бизнес-целей.',
    'Дата-аналитик (Data Analyst) — специалист, который обрабатывает и интерпретирует данные, выявляет тренды и паттерны, предоставляя инсайты для принятия решений.',
    'BI-аналитик (Business Intelligence Analyst) — специалист, работающий с инструментами бизнес-аналитики для создания визуализаций данных, дашбордов и отчётов для бизнеса.',
    'Data Scientist — аналитик, который использует машинное обучение, статистику и программирование для создания моделей прогнозирования и анализа сложных данных.',
    'Web-аналитик — специалист, который анализирует данные о посещаемости веб-сайтов, поведении пользователей и эффективности маркетинговых кампаний.',
    'Маркетинговый аналитик — эксперт, который изучает эффективность маркетинговых стратегий, поведение аудитории и рынок для повышения доходов компании.',
    'QA-аналитик (Quality Assurance Analyst) — специалист, который анализирует требования к продукту, тестирует его функциональность и выявляет дефекты для обеспечения качества.',
    'Когортный анализ (Cohort Analysis) — метод анализа, при котором пользователи группируются по определённым характеристикам (когортам) для изучения их поведения с течением времени.',
  ],
  [CardPathKey.DESIGNER]: [
    'UX-дизайнер (User Experience Designer) — специалист, занимающийся проектированием взаимодействия пользователя с продуктом, создавая удобный, понятный и эффективный опыт использования.',
    'UI-дизайнер (User Interface Designer) — дизайнер, который отвечает за внешний вид интерфейса, разрабатывая визуальные элементы, такие как кнопки, иконки и типографику.',
    'Прототипирование — процесс создания интерактивной модели будущего продукта для проверки идей и тестирования пользовательского опыта.',
    'Информационная архитектура — организация структуры информации в продукте, чтобы пользователь легко находил нужные данные.',
    'Юзабилити-тестирование — метод исследования, в ходе которого пользователи взаимодействуют с продуктом, чтобы выявить сложности и улучшить интерфейс.',
    'Дизайн-система — набор стандартизированных компонентов, правил и шаблонов, которые используются для создания унифицированных интерфейсов.',
    'Пользовательские сценарии (User Flows) — графическое или текстовое представление пути, который пользователь проходит при взаимодействии с продуктом.',
    'Адаптивный дизайн — подход к дизайну, при котором интерфейс подстраивается под разные размеры экранов и устройств.',
    'Визуальная иерархия — принцип дизайна, при котором элементы интерфейса организуются так, чтобы привлечь внимание к ключевым областям.',
    'Карта путешествия пользователя (Customer Journey Map) — визуализация опыта пользователя на всех этапах взаимодействия с продуктом, от первого контакта до завершения задачи.',
  ],
  [CardPathKey.FRONTEND]: [
    'Frontend-разработчик — специалист, создающий пользовательский интерфейс (UI) веб-приложений, обеспечивая их функциональность и визуальную привлекательность.',
    'HTML (HyperText Markup Language) — основной язык разметки, используемый для создания структуры веб-страницы.',
    'CSS (Cascading Style Sheets) — таблицы стилей, которые применяются для оформления веб-страниц: цвета, шрифты, размеры и расположение элементов.',
    'JavaScript (JS) — язык программирования, используемый для добавления интерактивности и динамического поведения веб-страниц.',
    'Адаптивная верстка — метод разработки интерфейсов, при котором дизайн подстраивается под различные размеры экранов и устройства.',
    'Кроссбраузерность — способность веб-приложения корректно работать в различных браузерах, таких как Chrome, Firefox, Safari и др.',
    'Фреймворк — библиотека или набор инструментов (например, React, Vue.js), упрощающий разработку сложных веб-приложений.',
    'API (Application Programming Interface) — интерфейс, позволяющий взаимодействовать с сервером, получать данные и интегрировать сторонние сервисы.',
    'Webpack — инструмент для сборки модулей JavaScript и других файлов проекта в оптимизированный для использования код.',
    'DOM (Document Object Model) — структура данных, представляющая содержимое веб-страницы как дерево элементов, которое можно изменять с помощью JavaScript.',
  ],
  [CardPathKey.BACKEND]: [
    'Backend-разработчик — специалист, который создает и поддерживает серверную часть приложений, обеспечивая их функциональность, обработку данных и взаимодействие с клиентской стороной.',
    'Сервер — компьютер или программа, обрабатывающая запросы пользователей и предоставляющая данные или услуги через сеть.',
    'API (Application Programming Interface) — набор методов и протоколов, который позволяет взаимодействовать клиентской и серверной частям приложения.',
    'База данных — организованное хранилище данных, используемое для сохранения, поиска и обработки информации (например, MySQL, PostgreSQL, MongoDB).',
    'REST (Representational State Transfer) — архитектурный стиль, используемый для создания API, обеспечивающий простое взаимодействие между клиентом и сервером через HTTP.',
    'ORM (Object-Relational Mapping) — технология, которая позволяет работать с базами данных через объектно-ориентированный подход (например, Sequelize, Hibernate).',
    'Скриптовые языки — языки программирования, часто используемые для разработки серверной логики (например, Python, PHP, JavaScript).',
    'Node.js — среда выполнения JavaScript на стороне сервера, позволяющая создавать масштабируемые и быстрые серверные приложения.',
    'Аутентификация и авторизация — процессы проверки личности пользователя (аутентификация) и предоставления ему доступа к определенным ресурсам (авторизация).',
    'Микросервисы — архитектурный подход, при котором приложение состоит из небольших независимых сервисов, взаимодействующих через API.',
  ],
  [CardPathKey.DEVOPS]: [
    'DevOps-инженер — специалист, который объединяет задачи разработки (Development) и эксплуатации (Operations) для повышения эффективности процессов разработки, тестирования, развертывания и мониторинга приложений.',
    'CI/CD (Continuous Integration and Continuous Delivery) — практика, обеспечивающая непрерывную интеграцию кода и автоматическое развертывание изменений в приложении.',
    'Контейнеризация — технология упаковки приложений и их зависимостей в изолированные контейнеры (например, Docker) для обеспечения их стабильной работы в разных средах.',
    'Оркестрация — управление развертыванием, масштабированием и мониторингом контейнеризированных приложений с помощью инструментов, таких как Kubernetes.',
    'Инфраструктура как код (IaC) — подход к управлению инфраструктурой с использованием файлов конфигурации, описывающих желаемое состояние ресурсов (например, Terraform, Ansible).',
    'Мониторинг и логирование — процессы отслеживания состояния систем и приложений (например, с помощью Prometheus, Grafana) и анализа логов для обнаружения и устранения проблем.',
    'Пайплайн сборки — автоматизированная последовательность шагов, включающая сборку, тестирование и развертывание кода.',
    'Репозиторий артефактов — хранилище для бинарных файлов и других артефактов, создаваемых в процессе сборки (например, Nexus, JFrog Artifactory).',
    'Облачные провайдеры — платформы, предоставляющие вычислительные ресурсы, такие как серверы, хранилища и базы данных, через Интернет (например, AWS, Azure, Google Cloud).',
    'Скриптинг и автоматизация — использование скриптовых языков (например, Python, Bash) для автоматизации рутинных задач и процессов в DevOps.',
  ],
};
