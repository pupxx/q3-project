exports.seed = function(knex) {
  return knex('exercises').del()
    .then(() => {
      return knex('exercises').insert([
        {
          id: 1,
          exercise_name: 'Narrow-stance squats',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,

          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          exercise_name: 'Forward lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          exercise_name: 'Reverse lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          exercise_name: 'Plyo jacks',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          exercise_name: 'Kickbacks',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          exercise_name: 'Reverse crunches',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          exercise_name: 'One-arm rows',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          exercise_name: 'Bench press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          exercise_name: 'Divebomber push-ups',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          exercise_name: 'Lateral raises',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          exercise_name: 'Low Lunge/Squat Combo',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          exercise_name: 'Low Plane Lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          exercise_name: 'Low Pulse Lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          exercise_name: 'One Leg Deadlift (Toes Elevated) 3/1 Count',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          exercise_name: 'One Leg Elevated Lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          exercise_name: 'One Leg Elevated Lunges Standing',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 17,
          exercise_name: 'One Leg Sit-and-Slide with Paper Plate ',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          exercise_name: 'One Leg Sit-and-Stands',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 19,
          exercise_name: 'One Leg Slide Back Lunges with Paper Plate ',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 20,
          exercise_name: 'Plie Squats Alternating Hand',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 21,
          exercise_name: 'Side Lunge',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 22,
          exercise_name: 'Side Lunge onto Six Inch High Step',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 23,
          exercise_name: 'Side Slide Lunges with Paper Plate',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 24,
          exercise_name: 'Sit-and-Stands',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 25,
          exercise_name: 'Squats,',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 26,
          exercise_name: 'Squats Narrow Stance',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 27,
          exercise_name: 'Static Low End Lunge Same Leg 3/1 Count',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 28,
          exercise_name: 'Static Lunge',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 29,
          exercise_name: 'Step Up with Hand Weights',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 30,
          exercise_name: 'Stiff Legged Deadlift',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 31,
          exercise_name: 'Stiff Legged Deadlift on Platform',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 32,
          exercise_name: 'Alternating One Arm Standing Lateral Raise',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 33,
          exercise_name: 'Alternating Seated Overhead Shoulder Press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 34,
          exercise_name: 'Incline Front Raise on Stability Ball',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 35,
          exercise_name: 'Incline Rear Raise on Stability Ball',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 36,
          exercise_name: 'Lateral Side to Front Combo',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 37,
          exercise_name: 'Side Leaning Lateral Raise',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 38,
          exercise_name: 'Seated Overhead Press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 39,
          exercise_name: 'Seated Front Press Double Arms',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 40,
          exercise_name: 'Standing Barbell Front Press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 41,
          exercise_name: 'Standing Front Raise',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 42,
          exercise_name: 'Standing Lateral Raise',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 43,
          exercise_name: 'Standing Overhead Press Both Arms',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 44,
          exercise_name: 'Standing Upright Rows',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 45,
          exercise_name: 'Incline Side Raise on Stability Ball',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 46,
          exercise_name: 'Seated Front Press Alternating Arms (Elbows Forward)',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 47,
          exercise_name: 'Seated Front Press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 48,
          exercise_name: 'Seated Lateral Raise Both Arms',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 49,
          exercise_name: 'Seated Rear Delts',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 50,
          exercise_name: 'Close Grip Bench Press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 51,
          exercise_name: 'Flat Bench Barbell Tricep Extensions',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 52,
          exercise_name: 'Flat Bench Dumbbell Tricep Extensions',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 53,
          exercise_name: 'Kickbacks One Arm',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 54,
          exercise_name: 'Seated Overhead Extensions Both Arms',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 55,
          exercise_name: 'Seated Overhead Extensions One Arm',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 56,
          exercise_name: 'Side Leaning One Arm Overhead Extensions on Ball',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 57,
          exercise_name: 'Kickbacks Double Arm',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 58,
          exercise_name: 'Cross Body Kickbacks Triceps',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 59,
          exercise_name: 'Double Arm Overhead Extension on Ball ',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
    ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('exercises_id_seq', (SELECT MAX(id) FROM exercises));"
      );
    });
};
