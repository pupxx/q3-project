exports.seed = function(knex) {
  return knex('workouts').del()
    .then(() => {
      return knex('workouts').insert([{
		 id: 1,
        title: 'Insanity',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 3,
        workout_category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        title: 'Rockout Knockout',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        title: 'P90X - Legs and Back',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 2,
        workout_category_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        title: 'P90X - Ab Ripper X',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 2,
        workout_category_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        title: 'Drill Max',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        title: 'Cardio Core Circuit',
        body: 'Cathe Friedrichís Cardio Core Circuit (51 min)\n Premixes \n Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        title: 'Pilates Power-Ball Sculpt',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 5,
        workout_category_id: 10,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        title: 'Ripped with HIIT - HIIT Upper Body Circuit',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 10,
        title: 'Extreme Burn',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 4,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 11,
        title: 'Peak 10 Cardio Strength',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 6,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 12,
        title: 'Boot Camp',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 13,
        title: 'Circuit Blast',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 14,
        title: 'HIIT 40-20',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 15,
        title: 'Lower Body Blast',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 16,
        title: 'STS Disc 5: Meso 1 Week 1: Back & Triceps',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 1,
        workout_category_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 17,
        title: 'Horizontal Conditioning: Boot Camp',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 9,
        workout_category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 18,
        title: 'Burn and Build',
        body: 'Warm-up (5 min) \nIntervals (39 min)\nRound 1\nSquat digs (30 sec)\nMountain climbers (30 sec)\nApple pull-downs(30 sec)\nRepeat all three\nCore: knee-ins (2 sets of 8)\nRound 2\nHop forward twice, drop to pushup, jump up to standing, 4 jacks (30 sec)\nSumo squats (30 sec) Lateral slides (30 sec)\nRepeat all three\nCore: Triangle choke-holds (12)\nCool-down/Stretch (7 min)',
        instructor_id: 8,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('workouts_id_seq', (SELECT MAX(id) FROM workouts));"
      );
    });
};
