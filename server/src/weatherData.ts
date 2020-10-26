const weatherData = [
    {
      "timestamp": "2020-01-01T00:00:00Z",
      "averageTemperature": 9.25,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-01T00:30:00Z",
      "averageTemperature": 9.25,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-01T01:00:00Z",
      "averageTemperature": 9.27,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-01T01:30:00Z",
      "averageTemperature": 9.27,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-01T02:00:00Z",
      "averageTemperature": 9.17,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-01T02:30:00Z",
      "averageTemperature": 9.17,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-01T03:00:00Z",
      "averageTemperature": 9,
      "averageHumidity": 0.97
    },
    {
      "timestamp": "2020-01-01T03:30:00Z",
      "averageTemperature": 9,
      "averageHumidity": 0.97
    },
    {
      "timestamp": "2020-01-01T04:00:00Z",
      "averageTemperature": 8.96,
      "averageHumidity": 0.97
    },
    {
      "timestamp": "2020-01-01T04:30:00Z",
      "averageTemperature": 8.96,
      "averageHumidity": 0.97
    },
    {
      "timestamp": "2020-01-01T05:00:00Z",
      "averageTemperature": 8.85,
      "averageHumidity": 0.98
    },
    {
      "timestamp": "2020-01-01T05:30:00Z",
      "averageTemperature": 8.85,
      "averageHumidity": 0.98
    },
    {
      "timestamp": "2020-01-01T06:00:00Z",
      "averageTemperature": 8.41,
      "averageHumidity": 0.98
    },
    {
      "timestamp": "2020-01-01T06:30:00Z",
      "averageTemperature": 8.41,
      "averageHumidity": 0.98
    },
    {
      "timestamp": "2020-01-01T07:00:00Z",
      "averageTemperature": 7.7,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-01T07:30:00Z",
      "averageTemperature": 7.7,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-01T08:00:00Z",
      "averageTemperature": 6.97,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-01T08:30:00Z",
      "averageTemperature": 6.97,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-01T09:00:00Z",
      "averageTemperature": 6.47,
      "averageHumidity": 0.98
    },
    {
      "timestamp": "2020-01-01T09:30:00Z",
      "averageTemperature": 6.47,
      "averageHumidity": 0.98
    },
    {
      "timestamp": "2020-01-01T10:00:00Z",
      "averageTemperature": 6.36,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-01T10:30:00Z",
      "averageTemperature": 6.36,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-01T11:00:00Z",
      "averageTemperature": 6.36,
      "averageHumidity": 0.87
    },
    {
      "timestamp": "2020-01-01T11:00:00Z",
      "averageTemperature": 6.36,
      "averageHumidity": 0.87
    },
    {
      "timestamp": "2020-01-01T12:00:00Z",
      "averageTemperature": 6.8,
      "averageHumidity": 0.78
    },
    {
      "timestamp": "2020-01-01T12:30:00Z",
      "averageTemperature": 6.8,
      "averageHumidity": 0.78
    },
    {
      "timestamp": "2020-01-01T13:00:00Z",
      "averageTemperature": 6.71,
      "averageHumidity": 0.76
    },
    {
      "timestamp": "2020-01-01T13:30:00Z",
      "averageTemperature": 6.71,
      "averageHumidity": 0.76
    },
    {
      "timestamp": "2020-01-01T14:00:00Z",
      "averageTemperature": 6.45,
      "averageHumidity": 0.76
    },
    {
      "timestamp": "2020-01-01T14:30:00Z",
      "averageTemperature": 6.45,
      "averageHumidity": 0.76
    },
    {
      "timestamp": "2020-01-01T15:00:00Z",
      "averageTemperature": 5.97,
      "averageHumidity": 0.78
    },
    {
      "timestamp": "2020-01-01T15:30:00Z",
      "averageTemperature": 5.97,
      "averageHumidity": 0.78
    },
    {
      "timestamp": "2020-01-01T16:00:00Z",
      "averageTemperature": 5.29,
      "averageHumidity": 0.8
    },
    {
      "timestamp": "2020-01-01T16:30:00Z",
      "averageTemperature": 5.29,
      "averageHumidity": 0.8
    },
    {
      "timestamp": "2020-01-01T17:00:00Z",
      "averageTemperature": 4.61,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-01T17:30:00Z",
      "averageTemperature": 4.61,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-01T18:00:00Z",
      "averageTemperature": 3.98,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-01T18:30:00Z",
      "averageTemperature": 3.98,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-01T19:00:00Z",
      "averageTemperature": 3.75,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-01T19:30:00Z",
      "averageTemperature": 3.75,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-01T20:00:00Z",
      "averageTemperature": 3.4,
      "averageHumidity": 0.81
    },
    {
      "timestamp": "2020-01-01T20:30:00Z",
      "averageTemperature": 3.4,
      "averageHumidity": 0.81
    },
    {
      "timestamp": "2020-01-01T21:00:00Z",
      "averageTemperature": 3.03,
      "averageHumidity": 0.81
    },
    {
      "timestamp": "2020-01-01T21:30:00Z",
      "averageTemperature": 3.03,
      "averageHumidity": 0.81
    },
    {
      "timestamp": "2020-01-01T22:00:00Z",
      "averageTemperature": 2.65,
      "averageHumidity": 0.8
    },
    {
      "timestamp": "2020-01-01T22:30:00Z",
      "averageTemperature": 2.65,
      "averageHumidity": 0.8
    },
    {
      "timestamp": "2020-01-01T23:00:00Z",
      "averageTemperature": 2.25,
      "averageHumidity": 0.81
    },
    {
      "timestamp": "2020-01-01T23:30:00Z",
      "averageTemperature": 2.25,
      "averageHumidity": 0.81
    },
    {
      "timestamp": "2020-01-02T00:00:00Z",
      "averageTemperature": 2.46,
      "averageHumidity": 0.73
    },
    {
      "timestamp": "2020-01-02T00:30:00Z",
      "averageTemperature": 2.46,
      "averageHumidity": 0.73
    },
    {
      "timestamp": "2020-01-02T01:00:00Z",
      "averageTemperature": 1.9,
      "averageHumidity": 0.75
    },
    {
      "timestamp": "2020-01-02T01:30:00Z",
      "averageTemperature": 1.9,
      "averageHumidity": 0.75
    },
    {
      "timestamp": "2020-01-02T02:00:00Z",
      "averageTemperature": 1.22,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-02T02:30:00Z",
      "averageTemperature": 1.22,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-02T03:00:00Z",
      "averageTemperature": 0.52,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-02T03:30:00Z",
      "averageTemperature": 0.52,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-02T04:00:00Z",
      "averageTemperature": -0.06,
      "averageHumidity": 0.84
    },
    {
      "timestamp": "2020-01-02T04:30:00Z",
      "averageTemperature": -0.06,
      "averageHumidity": 0.84
    },
    {
      "timestamp": "2020-01-02T05:00:00Z",
      "averageTemperature": -0.22,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-02T05:30:00Z",
      "averageTemperature": -0.22,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-02T06:00:00Z",
      "averageTemperature": -0.26,
      "averageHumidity": 0.87
    },
    {
      "timestamp": "2020-01-02T06:30:00Z",
      "averageTemperature": -0.26,
      "averageHumidity": 0.87
    },
    {
      "timestamp": "2020-01-02T07:00:00Z",
      "averageTemperature": -0.51,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-02T07:30:00Z",
      "averageTemperature": -0.51,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-02T08:00:00Z",
      "averageTemperature": -0.72,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-02T08:30:00Z",
      "averageTemperature": -0.72,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-02T09:00:00Z",
      "averageTemperature": -0.45,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-02T09:30:00Z",
      "averageTemperature": -0.45,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-02T10:00:00Z",
      "averageTemperature": 0.55,
      "averageHumidity": 0.84
    },
    {
      "timestamp": "2020-01-02T10:30:00Z",
      "averageTemperature": 0.55,
      "averageHumidity": 0.84
    },
    {
      "timestamp": "2020-01-02T11:00:00Z",
      "averageTemperature": 1.97,
      "averageHumidity": 0.77
    },
    {
      "timestamp": "2020-01-02T11:00:00Z",
      "averageTemperature": 1.97,
      "averageHumidity": 0.77
    },
    {
      "timestamp": "2020-01-02T12:00:00Z",
      "averageTemperature": 3.58,
      "averageHumidity": 0.75
    },
    {
      "timestamp": "2020-01-02T12:30:00Z",
      "averageTemperature": 3.58,
      "averageHumidity": 0.75
    },
    {
      "timestamp": "2020-01-02T13:00:00Z",
      "averageTemperature": 4.08,
      "averageHumidity": 0.74
    },
    {
      "timestamp": "2020-01-02T13:30:00Z",
      "averageTemperature": 4.08,
      "averageHumidity": 0.74
    },
    {
      "timestamp": "2020-01-02T14:00:00Z",
      "averageTemperature": 3.85,
      "averageHumidity": 0.76
    },
    {
      "timestamp": "2020-01-02T14:30:00Z",
      "averageTemperature": 3.85,
      "averageHumidity": 0.76
    },
    {
      "timestamp": "2020-01-02T15:00:00Z",
      "averageTemperature": 3.2,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-02T15:30:00Z",
      "averageTemperature": 3.2,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-02T16:00:00Z",
      "averageTemperature": 2.15,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-02T16:30:00Z",
      "averageTemperature": 2.15,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-02T17:00:00Z",
      "averageTemperature": 0.98,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-02T17:30:00Z",
      "averageTemperature": 0.98,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-02T18:00:00Z",
      "averageTemperature": 0.05,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-02T18:30:00Z",
      "averageTemperature": 0.05,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-02T19:00:00Z",
      "averageTemperature": -0.11,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-02T19:30:00Z",
      "averageTemperature": -0.11,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-02T20:00:00Z",
      "averageTemperature": -0.07,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-02T20:30:00Z",
      "averageTemperature": -0.07,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-02T21:00:00Z",
      "averageTemperature": -0.23,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-02T21:30:00Z",
      "averageTemperature": -0.23,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-02T22:00:00Z",
      "averageTemperature": -0.42,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-02T22:30:00Z",
      "averageTemperature": -0.42,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-02T23:00:00Z",
      "averageTemperature": -0.63,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-02T23:30:00Z",
      "averageTemperature": -0.63,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-03T00:00:00Z",
      "averageTemperature": 1.77,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T00:30:00Z",
      "averageTemperature": 1.77,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T01:00:00Z",
      "averageTemperature": 1.09,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T01:30:00Z",
      "averageTemperature": 1.09,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T02:00:00Z",
      "averageTemperature": -0.2,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T02:30:00Z",
      "averageTemperature": -0.2,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T03:00:00Z",
      "averageTemperature": -1.45,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T03:30:00Z",
      "averageTemperature": -1.45,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T04:00:00Z",
      "averageTemperature": -2.03,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-03T04:30:00Z",
      "averageTemperature": -2.03,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-03T05:00:00Z",
      "averageTemperature": -2.17,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-03T05:30:00Z",
      "averageTemperature": -2.17,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-03T06:00:00Z",
      "averageTemperature": -2.35,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-03T06:30:00Z",
      "averageTemperature": -2.35,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-03T07:00:00Z",
      "averageTemperature": -2.76,
      "averageHumidity": 0.95
    },
    {
      "timestamp": "2020-01-03T07:30:00Z",
      "averageTemperature": -2.76,
      "averageHumidity": 0.95
    },
    {
      "timestamp": "2020-01-03T08:00:00Z",
      "averageTemperature": -3.15,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T08:30:00Z",
      "averageTemperature": -3.15,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T09:00:00Z",
      "averageTemperature": -3.06,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T09:30:00Z",
      "averageTemperature": -3.06,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T10:00:00Z",
      "averageTemperature": -2.06,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-03T10:30:00Z",
      "averageTemperature": -2.06,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-03T11:00:00Z",
      "averageTemperature": -0.25,
      "averageHumidity": 0.83
    },
    {
      "timestamp": "2020-01-03T11:00:00Z",
      "averageTemperature": -0.25,
      "averageHumidity": 0.83
    },
    {
      "timestamp": "2020-01-03T12:00:00Z",
      "averageTemperature": 2.03,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-03T12:30:00Z",
      "averageTemperature": 2.03,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-03T13:00:00Z",
      "averageTemperature": 2.7,
      "averageHumidity": 0.77
    },
    {
      "timestamp": "2020-01-03T13:30:00Z",
      "averageTemperature": 2.7,
      "averageHumidity": 0.77
    },
    {
      "timestamp": "2020-01-03T14:00:00Z",
      "averageTemperature": 2.56,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-03T14:30:00Z",
      "averageTemperature": 2.56,
      "averageHumidity": 0.79
    },
    {
      "timestamp": "2020-01-03T15:00:00Z",
      "averageTemperature": 1.39,
      "averageHumidity": 0.87
    },
    {
      "timestamp": "2020-01-03T15:30:00Z",
      "averageTemperature": 1.39,
      "averageHumidity": 0.87
    },
    {
      "timestamp": "2020-01-03T16:00:00Z",
      "averageTemperature": 0.64,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T16:30:00Z",
      "averageTemperature": 0.64,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-03T17:00:00Z",
      "averageTemperature": -0.43,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-03T17:30:00Z",
      "averageTemperature": -0.43,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-03T18:00:00Z",
      "averageTemperature": -1.33,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T18:30:00Z",
      "averageTemperature": -1.33,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T19:00:00Z",
      "averageTemperature": -1.62,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T19:30:00Z",
      "averageTemperature": -1.62,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-03T20:00:00Z",
      "averageTemperature": -1.55,
      "averageHumidity": 0.95
    },
    {
      "timestamp": "2020-01-03T20:30:00Z",
      "averageTemperature": -1.55,
      "averageHumidity": 0.95
    },
    {
      "timestamp": "2020-01-03T21:00:00Z",
      "averageTemperature": -1.66,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-03T21:30:00Z",
      "averageTemperature": -1.66,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-03T22:00:00Z",
      "averageTemperature": -1.78,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-03T22:30:00Z",
      "averageTemperature": -1.78,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-03T23:00:00Z",
      "averageTemperature": -1.9,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-03T23:30:00Z",
      "averageTemperature": -1.9,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-04T00:00:00Z",
      "averageTemperature": 1.2,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-04T00:30:00Z",
      "averageTemperature": 1.2,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-04T01:00:00Z",
      "averageTemperature": 0.16,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-04T01:30:00Z",
      "averageTemperature": 0.16,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-04T02:00:00Z",
      "averageTemperature": -1.81,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-04T02:30:00Z",
      "averageTemperature": -1.81,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-04T03:00:00Z",
      "averageTemperature": -3.64,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-04T03:30:00Z",
      "averageTemperature": -3.64,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-04T04:00:00Z",
      "averageTemperature": -4.28,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T04:30:00Z",
      "averageTemperature": -4.28,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T05:00:00Z",
      "averageTemperature": -4.3,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T05:30:00Z",
      "averageTemperature": -4.3,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T06:00:00Z",
      "averageTemperature": -4.13,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T06:30:00Z",
      "averageTemperature": -4.13,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T07:00:00Z",
      "averageTemperature": -4.14,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T07:30:00Z",
      "averageTemperature": -4.14,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T08:00:00Z",
      "averageTemperature": -4.18,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T08:30:00Z",
      "averageTemperature": -4.18,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T09:00:00Z",
      "averageTemperature": -3.93,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T09:30:00Z",
      "averageTemperature": -3.93,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T10:00:00Z",
      "averageTemperature": -2.67,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T10:30:00Z",
      "averageTemperature": -2.67,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T11:00:00Z",
      "averageTemperature": -0.81,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-04T11:00:00Z",
      "averageTemperature": -0.81,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-04T12:00:00Z",
      "averageTemperature": 2.51,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-04T12:30:00Z",
      "averageTemperature": 2.51,
      "averageHumidity": 0.92
    },
    {
      "timestamp": "2020-01-04T13:00:00Z",
      "averageTemperature": 3.19,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-04T13:30:00Z",
      "averageTemperature": 3.19,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-04T14:00:00Z",
      "averageTemperature": 3.03,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-04T14:30:00Z",
      "averageTemperature": 3.03,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-04T15:00:00Z",
      "averageTemperature": 2.52,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-04T15:30:00Z",
      "averageTemperature": 2.52,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-04T16:00:00Z",
      "averageTemperature": 1.63,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-04T16:30:00Z",
      "averageTemperature": 1.63,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-04T17:00:00Z",
      "averageTemperature": 0.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T17:30:00Z",
      "averageTemperature": 0.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T18:00:00Z",
      "averageTemperature": -0.35,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T18:30:00Z",
      "averageTemperature": -0.35,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T19:00:00Z",
      "averageTemperature": -0.58,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T19:30:00Z",
      "averageTemperature": -0.58,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T20:00:00Z",
      "averageTemperature": -0.6,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T20:30:00Z",
      "averageTemperature": -0.6,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T21:00:00Z",
      "averageTemperature": -0.7,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T21:30:00Z",
      "averageTemperature": -0.7,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T22:00:00Z",
      "averageTemperature": -0.75,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T22:30:00Z",
      "averageTemperature": -0.75,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T23:00:00Z",
      "averageTemperature": -0.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-04T23:30:00Z",
      "averageTemperature": -0.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T00:00:00Z",
      "averageTemperature": 2.72,
      "averageHumidity": 0.88
    },
    {
      "timestamp": "2020-01-05T00:30:00Z",
      "averageTemperature": 2.72,
      "averageHumidity": 0.88
    },
    {
      "timestamp": "2020-01-05T01:00:00Z",
      "averageTemperature": 1.72,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-05T01:30:00Z",
      "averageTemperature": 1.72,
      "averageHumidity": 0.89
    },
    {
      "timestamp": "2020-01-05T02:00:00Z",
      "averageTemperature": -0.32,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-05T02:30:00Z",
      "averageTemperature": -0.32,
      "averageHumidity": 0.94
    },
    {
      "timestamp": "2020-01-05T03:00:00Z",
      "averageTemperature": -2.14,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T03:30:00Z",
      "averageTemperature": -2.14,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T04:00:00Z",
      "averageTemperature": -2.82,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T04:30:00Z",
      "averageTemperature": -2.82,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T05:00:00Z",
      "averageTemperature": -2.68,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T05:30:00Z",
      "averageTemperature": -2.68,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T06:00:00Z",
      "averageTemperature": -2.35,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T06:30:00Z",
      "averageTemperature": -2.35,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T07:00:00Z",
      "averageTemperature": -2.62,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T07:30:00Z",
      "averageTemperature": -2.62,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T08:00:00Z",
      "averageTemperature": -2.94,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T08:30:00Z",
      "averageTemperature": -2.94,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T09:00:00Z",
      "averageTemperature": -2.71,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T09:30:00Z",
      "averageTemperature": -2.71,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T10:00:00Z",
      "averageTemperature": -1.37,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T10:30:00Z",
      "averageTemperature": -1.37,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T11:00:00Z",
      "averageTemperature": 0.75,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T11:00:00Z",
      "averageTemperature": 0.75,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T12:00:00Z",
      "averageTemperature": 3.93,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-05T12:30:00Z",
      "averageTemperature": 3.93,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-05T13:00:00Z",
      "averageTemperature": 4.55,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-05T13:30:00Z",
      "averageTemperature": 4.55,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-05T14:00:00Z",
      "averageTemperature": 4.22,
      "averageHumidity": 0.95
    },
    {
      "timestamp": "2020-01-05T14:30:00Z",
      "averageTemperature": 4.22,
      "averageHumidity": 0.95
    },
    {
      "timestamp": "2020-01-05T15:00:00Z",
      "averageTemperature": 3.11,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T15:30:00Z",
      "averageTemperature": 3.11,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T16:00:00Z",
      "averageTemperature": 2.34,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T16:30:00Z",
      "averageTemperature": 2.34,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T17:00:00Z",
      "averageTemperature": 1.27,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T17:30:00Z",
      "averageTemperature": 1.27,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T18:00:00Z",
      "averageTemperature": 0.67,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T18:30:00Z",
      "averageTemperature": 0.67,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T19:00:00Z",
      "averageTemperature": 0.46,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T19:30:00Z",
      "averageTemperature": 0.46,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T20:00:00Z",
      "averageTemperature": 0.44,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T20:30:00Z",
      "averageTemperature": 0.44,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T21:00:00Z",
      "averageTemperature": 0.24,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T21:30:00Z",
      "averageTemperature": 0.24,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T22:00:00Z",
      "averageTemperature": 0.46,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T22:30:00Z",
      "averageTemperature": 0.46,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T23:00:00Z",
      "averageTemperature": 0.94,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-05T23:30:00Z",
      "averageTemperature": 0.94,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T00:00:00Z",
      "averageTemperature": 4.88,
      "averageHumidity": 0.97
    },
    {
      "timestamp": "2020-01-06T00:30:00Z",
      "averageTemperature": 4.88,
      "averageHumidity": 0.97
    },
    {
      "timestamp": "2020-01-06T01:00:00Z",
      "averageTemperature": 4.54,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-06T01:30:00Z",
      "averageTemperature": 4.54,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-06T02:00:00Z",
      "averageTemperature": 3.56,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T02:30:00Z",
      "averageTemperature": 3.56,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T03:00:00Z",
      "averageTemperature": 2.71,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T03:30:00Z",
      "averageTemperature": 2.71,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T04:00:00Z",
      "averageTemperature": 2.35,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T04:30:00Z",
      "averageTemperature": 2.35,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T05:00:00Z",
      "averageTemperature": 2.61,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T05:30:00Z",
      "averageTemperature": 2.61,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T06:00:00Z",
      "averageTemperature": 3.29,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T06:30:00Z",
      "averageTemperature": 3.29,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T07:00:00Z",
      "averageTemperature": 3.33,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T07:30:00Z",
      "averageTemperature": 3.33,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T08:00:00Z",
      "averageTemperature": 3.36,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T08:30:00Z",
      "averageTemperature": 3.36,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T09:00:00Z",
      "averageTemperature": 3.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T09:30:00Z",
      "averageTemperature": 3.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T10:00:00Z",
      "averageTemperature": 4.48,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T10:30:00Z",
      "averageTemperature": 4.48,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T11:00:00Z",
      "averageTemperature": 5.54,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-06T11:00:00Z",
      "averageTemperature": 5.54,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-06T12:00:00Z",
      "averageTemperature": 7.98,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-06T12:30:00Z",
      "averageTemperature": 7.98,
      "averageHumidity": 0.91
    },
    {
      "timestamp": "2020-01-06T13:00:00Z",
      "averageTemperature": 8.4,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-06T13:30:00Z",
      "averageTemperature": 8.4,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-06T14:00:00Z",
      "averageTemperature": 8.11,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-06T14:30:00Z",
      "averageTemperature": 8.11,
      "averageHumidity": 0.93
    },
    {
      "timestamp": "2020-01-06T15:00:00Z",
      "averageTemperature": 7.01,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-06T15:30:00Z",
      "averageTemperature": 7.01,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-06T16:00:00Z",
      "averageTemperature": 6.53,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T16:30:00Z",
      "averageTemperature": 6.53,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T17:00:00Z",
      "averageTemperature": 5.82,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T17:30:00Z",
      "averageTemperature": 5.82,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T18:00:00Z",
      "averageTemperature": 5.54,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T18:30:00Z",
      "averageTemperature": 5.54,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T19:00:00Z",
      "averageTemperature": 5.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T19:30:00Z",
      "averageTemperature": 5.66,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T20:00:00Z",
      "averageTemperature": 5.65,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T20:30:00Z",
      "averageTemperature": 5.65,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T21:00:00Z",
      "averageTemperature": 5.59,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T21:30:00Z",
      "averageTemperature": 5.59,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T22:00:00Z",
      "averageTemperature": 5.56,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T22:30:00Z",
      "averageTemperature": 5.56,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T23:00:00Z",
      "averageTemperature": 5.47,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-06T23:30:00Z",
      "averageTemperature": 5.47,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T00:00:00Z",
      "averageTemperature": 7.85,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-07T00:30:00Z",
      "averageTemperature": 7.85,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-07T01:00:00Z",
      "averageTemperature": 7.61,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T01:30:00Z",
      "averageTemperature": 7.61,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T02:00:00Z",
      "averageTemperature": 6.88,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T02:30:00Z",
      "averageTemperature": 6.88,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T03:00:00Z",
      "averageTemperature": 6.32,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T03:30:00Z",
      "averageTemperature": 6.32,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T04:00:00Z",
      "averageTemperature": 6.05,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T04:30:00Z",
      "averageTemperature": 6.05,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T05:00:00Z",
      "averageTemperature": 6.13,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T05:30:00Z",
      "averageTemperature": 6.13,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T06:00:00Z",
      "averageTemperature": 6.5,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T06:30:00Z",
      "averageTemperature": 6.5,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T07:00:00Z",
      "averageTemperature": 6.92,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T07:30:00Z",
      "averageTemperature": 6.92,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T08:00:00Z",
      "averageTemperature": 7.41,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T08:30:00Z",
      "averageTemperature": 7.41,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T09:00:00Z",
      "averageTemperature": 7.84,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T09:30:00Z",
      "averageTemperature": 7.84,
      "averageHumidity": 1
    },
    {
      "timestamp": "2020-01-07T10:00:00Z",
      "averageTemperature": 8.44,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-07T10:30:00Z",
      "averageTemperature": 8.44,
      "averageHumidity": 0.99
    },
    {
      "timestamp": "2020-01-07T11:00:00Z",
      "averageTemperature": 8.96,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-07T11:00:00Z",
      "averageTemperature": 8.96,
      "averageHumidity": 0.96
    },
    {
      "timestamp": "2020-01-07T12:00:00Z",
      "averageTemperature": 10.43,
      "averageHumidity": 0.88
    },
    {
      "timestamp": "2020-01-07T12:30:00Z",
      "averageTemperature": 10.43,
      "averageHumidity": 0.88
    },
    {
      "timestamp": "2020-01-07T13:00:00Z",
      "averageTemperature": 10.76,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-07T13:30:00Z",
      "averageTemperature": 10.76,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-07T14:00:00Z",
      "averageTemperature": 10.72,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-07T14:30:00Z",
      "averageTemperature": 10.72,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-07T15:00:00Z",
      "averageTemperature": 9.26,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-07T15:30:00Z",
      "averageTemperature": 9.26,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-07T16:00:00Z",
      "averageTemperature": 8.98,
      "averageHumidity": 0.86
    },
    {
      "timestamp": "2020-01-07T16:30:00Z",
      "averageTemperature": 8.98,
      "averageHumidity": 0.86
    },
    {
      "timestamp": "2020-01-07T17:00:00Z",
      "averageTemperature": 8.06,
      "averageHumidity": 0.84
    },
    {
      "timestamp": "2020-01-07T17:30:00Z",
      "averageTemperature": 8.06,
      "averageHumidity": 0.84
    },
    {
      "timestamp": "2020-01-07T18:00:00Z",
      "averageTemperature": 7.27,
      "averageHumidity": 0.83
    },
    {
      "timestamp": "2020-01-07T18:30:00Z",
      "averageTemperature": 7.27,
      "averageHumidity": 0.83
    },
    {
      "timestamp": "2020-01-07T19:00:00Z",
      "averageTemperature": 7.3,
      "averageHumidity": 0.83
    },
    {
      "timestamp": "2020-01-07T19:30:00Z",
      "averageTemperature": 7.3,
      "averageHumidity": 0.83
    },
    {
      "timestamp": "2020-01-07T20:00:00Z",
      "averageTemperature": 7.48,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-07T20:30:00Z",
      "averageTemperature": 7.48,
      "averageHumidity": 0.82
    },
    {
      "timestamp": "2020-01-07T21:00:00Z",
      "averageTemperature": 6.78,
      "averageHumidity": 0.88
    },
    {
      "timestamp": "2020-01-07T21:30:00Z",
      "averageTemperature": 6.78,
      "averageHumidity": 0.88
    },
    {
      "timestamp": "2020-01-07T22:00:00Z",
      "averageTemperature": 6.48,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-07T22:30:00Z",
      "averageTemperature": 6.48,
      "averageHumidity": 0.9
    },
    {
      "timestamp": "2020-01-07T23:00:00Z",
      "averageTemperature": 7.08,
      "averageHumidity": 0.85
    },
    {
      "timestamp": "2020-01-07T23:30:00Z",
      "averageTemperature": 7.08,
      "averageHumidity": 0.85
    }
  ]

  export default weatherData

