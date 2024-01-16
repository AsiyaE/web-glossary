export const termNodes=[
  {
    "id": 1,
    "term": "Машинное обучение",
    "definition": " -",
    "coordinate": {
      "x": 690,
      "y": 210,
    }
  },
  {
    "id": 2,
    "term": "Модель машинного обучения",
    "definition": "Представляет собой алгоритм или математическую функцию, который обучен распознаванию определенных типов закономерностей.",
    "coordinate": {
      "x": 44,
      "y": 533
    }
  },
  {
    "id": 3,
    "term": "Задача классификациии",
    "definition": "Задача, в которой имеется множество объектов (ситуаций), разделённых, некоторым образом, на классы.",
    "coordinate": {
      "x": 715,
      "y": 523
    }
  },
  {
    "id": 4,
    "term": "Искуственная нейронная сеть",
    "definition": "Упрощенная модель биологической нейронной сети, представляющая собой совокупность искусственных нейронов, взаимодействующих между собой.",
    "coordinate": {
      "x": 427,
      "y": 238
    }
  },
  {
    "id": 5,
    "term": "Рекомендательная система",
    "definition": "Программа (веб-сервис), которая пытается предсказать, какие объекты (фильмы, музыка, книги, новости, веб-сайты) будут интересны пользователю, имея определенную информацию о его профиле.",
    "coordinate": {
      "x": 44,
      "y": 60
    }
  },
  {
    "id": 6,
    "term": "Колаборативная фильтрация",
    "definition": "Один из методов построения прогнозов (рекомендаций) в рекомендательных системах, использующий известные предпочтения (оценки) группы пользователей для прогнозирования неизвестных предпочтений другого пользователя.",
    "coordinate": {
      "x": 44,
      "y": 320
    }
  },
  {
    "id": 7,
    "term": "Обучение с учителем",
    "definition": "это тип МО, при котором модель обучается на основе маркированных данных, где каждый пример данных имеет соответствующую целевую переменную или метку.",
    "coordinate": {
      "x": 510,
      "y": 405
    }
  },
  {
    "id": 8,
    "term": "Обучение без учителя",
    "definition": "это тип МО, при котором модель обучается на немаркированных данных без явной целевой переменной.",
    "coordinate": {
      "x": 827,
      "y": 316
    }
  },
  {
    "id": 9,
    "term": "Глубокое обучение",
    "definition": "является подразделом ML, который использует искусственные нейронные сети с большим числом слоев для извлечения высокоуровневых признаков из данных. Оно обычно применяется к задачам, таким как распознавание образов, обработка естественного языка и автоматическое принятие решений.",
    "coordinate": {
      "x": 517,
      "y": 84
    }
  },
  {
    "id": 10,
    "term": "Холодный старт",
    "definition": "ситуация, когда ещё не накоплено достаточное количество данных для корректной работы рекомендательной системы.",
    "coordinate": {
      "x": 303,
      "y": 128
    }
  },
  {
    "id": 11,
    "term": "Контентная фильтрация",
    "definition": "Система рекомендаций, основанная на фильтрации на основе контента, предоставляет рекомендации пользователю путем анализа описания контента, которое было оценено пользователем.",
    "coordinate": {
      "x": 205,
      "y": 196
    }
  },
  {
    "id": 12,
    "term": "Фильтрация, основанная на знаниях",
    "definition": "Система рекомендаций, основанная на экспертном мнении. В отличие от контентной и колаборативной фильтрации является неперсонализированной. ",
    "coordinate": {
      "x": 205,
      "y": 428
    }
  },
];

export const termLinks =[
    {
      "source": 9,
      "target": 1,
      "relation": "является методом"
    },
    {
      "source": 3,
      "target": 7,
      "relation": "является задачей"
    },
    {
      "source": 5,
      "target": 6,
      "relation": "строется на основании"
    },
    {
      "source": 5,
      "target": 11,
      "relation": "строется на основании"
    },
    {
      "source": 5,
      "target": 12,
      "relation": "строется на основании"
    },
    {
      "source": 1,
      "target": 8,
      "relation": "содержит подраздел"
    },
    {
      "source": 1,
      "target": 7,
      "relation": "содержит подраздел"
    },
    {
      "source": 9,
      "target": 4,
      "relation": "использует"
    },
    {
      "source": 6,
      "target": 2,
      "relation": "использует"
    },
    {
      "source": 5,
      "target": 10,
      "relation": "имеет проблему"
    }
]