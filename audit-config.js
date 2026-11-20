const AUDIT_CONFIG = {
  version: '1.0.0',
  assessmentName: 'The Next Chapter Life Audit',
  totalQuestions: 24,
  scaleMin: 1,
  scaleMax: 10,
  scaleLabels: {
    low: 'Not true for me right now',
    high: 'Completely true for me right now',
  },

  categories: [
    { id: 'career', label: 'Career' },
    { id: 'finances', label: 'Finances' },
    { id: 'health', label: 'Health' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'personal-growth', label: 'Personal Growth' },
    { id: 'fun-recreation', label: 'Fun & Recreation' },
    { id: 'environment', label: 'Environment' },
    { id: 'purpose-fulfilment', label: 'Purpose & Fulfilment' },
  ],

  questions: [
    { id: 'career-1', category: 'career', text: 'The work I do most days actually energises me — or at least doesn\'t leave me feeling empty.' },
    { id: 'career-2', category: 'career', text: 'My work feels like it fits who I am and the person I\'m growing into.' },
    { id: 'career-3', category: 'career', text: 'I can see a way forward — even if it\'s not perfectly clear yet — that feels right for me.', },

    { id: 'finances-1', category: 'finances', text: 'I feel confident and secure about my financial situation.' },
    { id: 'finances-2', category: 'finances', text: 'My financial situation gives me room to make choices that matter to me.' },
    { id: 'finances-3', category: 'finances', text: 'I understand my finances enough to make decisions without second-guessing everything.' },

    { id: 'health-1', category: 'health', text: 'I have enough energy to get through my days without constantly running on empty.' },
    { id: 'health-2', category: 'health', text: 'I make time for my health — even if it\'s small — because I know I matter.' },
    { id: 'health-3', category: 'health', text: 'My daily routines mostly support how I want to feel, not just what I have to do.' },

    { id: 'relationships-1', category: 'relationships', text: 'I feel held and seen by the people closest to me.' },
    { id: 'relationships-2', category: 'relationships', text: 'I can show up as my real self in my most important relationships.' },
    { id: 'relationships-3', category: 'relationships', text: 'I feel safe enough in my relationships to set boundaries and be honest about what I need.' },

    { id: 'personal-growth-1', category: 'personal-growth', text: 'I feel like I\'m still growing — not stuck in the same place I was a year ago.' },
    { id: 'personal-growth-2', category: 'personal-growth', text: 'I\'m becoming more of who I actually want to be, not just who I think I should be.' },
    { id: 'personal-growth-3', category: 'personal-growth', text: 'I take small risks and try things that stretch me, even when they scare me a little.' },

    { id: 'fun-recreation-1', category: 'fun-recreation', text: 'My life includes things I genuinely look forward to — not just obligations.' },
    { id: 'fun-recreation-2', category: 'fun-recreation', text: 'I let myself rest and enjoy life without the guilt creeping in.' },
    { id: 'fun-recreation-3', category: 'fun-recreation', text: 'I regularly have something on the calendar that lights me up.' },

    { id: 'environment-1', category: 'environment', text: 'My home and surroundings help me feel calm, not chaotic.' },
    { id: 'environment-2', category: 'environment', text: 'I feel a sense of comfort and belonging in the space I live in.' },
    { id: 'environment-3', category: 'environment', text: 'I have enough room — physically and mentally — to breathe and reset.' },

    { id: 'purpose-fulfilment-1', category: 'purpose-fulfilment', text: 'My life feels like it adds up to something, even on the messy days.' },
    { id: 'purpose-fulfilment-2', category: 'purpose-fulfilment', text: 'I feel connected to something I want to give, create or be part of.' },
    { id: 'purpose-fulfilment-3', category: 'purpose-fulfilment', text: 'I have a sense of direction — not a perfect map, but a compass.' },
  ],

  personalisationQuestions: [
    {
      id: 'priority-areas',
      type: 'select-multiple',
      text: 'Which two areas feel most important to you right now?',
      maxSelections: 2,
      options: [
        'Career', 'Finances', 'Health', 'Relationships',
        'Personal Growth', 'Fun & Recreation', 'Environment', 'Purpose & Fulfilment',
      ],
    },
    {
      id: 'what-brought-you',
      type: 'select-one',
      text: 'What brought you here today?',
      options: [
        { value: 'career-change', label: 'I am considering a career change' },
        { value: 'unfulfilled', label: 'I feel successful but unfulfilled' },
        { value: 'burnout', label: 'I am recovering from burnout or a difficult season' },
        { value: 'caregiving', label: 'My family or caregiving role has changed' },
        { value: 'start-something', label: 'I want to start something of my own' },
        { value: 'stuck', label: 'I feel stuck but cannot explain why' },
        { value: 'new-stage', label: 'I am entering a new stage of life' },
        { value: 'intention', label: 'Nothing is wrong; I simply want to live with more intention' },
        { value: 'other', label: 'Something else' },
      ],
      hasOtherField: true,
    },
  ],

  chapters: [
    {
      id: 'ready-to-bloom',
      label: 'Ready to Bloom',
      minPercent: 80,
      maxPercent: 100,
      description: 'You are in a strong and growing season. Your answers suggest you have built meaningful foundations across many areas of your life. The next chapter may be about turning your awareness into bold, intentional action.',
      icon: 'flower',
    },
    {
      id: 'turning-the-page',
      label: 'Turning the Page',
      minPercent: 65,
      maxPercent: 79,
      description: 'You are in a season of transition. Some areas feel strong while others are calling for your attention. The next chapter may be about honouring what you have built and gently redesigning what no longer fits.',
      icon: 'book',
    },
    {
      id: 'at-the-crossroads',
      label: 'At the Crossroads',
      minPercent: 45,
      maxPercent: 64,
      description: 'You are standing at an important threshold. Your answers reflect a desire for change and a readiness to explore what comes next. The next chapter may be about giving yourself permission to begin.',
      icon: 'compass',
    },
    {
      id: 'first-page',
      label: 'The First Page',
      minPercent: 0,
      maxPercent: 44,
      description: 'You are at the very beginning of something new. Your answers show honesty and courage. The next chapter starts exactly where you are, with one small, intentional step forward.',
      icon: 'page',
    },
  ],

  patterns: [
    {
      id: 'strong-foundation',
      label: 'Strong Foundation, New Direction',
      condition: 'high-with-dips',
      interpretation: 'Much of your life has a strong foundation, but one or two areas may no longer reflect the person you are becoming.',
    },
    {
      id: 'pulled-directions',
      label: 'Pulled in Different Directions',
      condition: 'high-variance',
      interpretation: 'Some areas of your life are flourishing while others may be receiving less of your time, attention or energy.',
    },
    {
      id: 'reconnection',
      label: 'Ready for Reconnection',
      condition: 'low-several',
      interpretation: 'Your answers suggest that you may have spent considerable energy meeting responsibilities while losing touch with some of your own needs.',
    },
    {
      id: 'momentum',
      label: 'Momentum Is Building',
      condition: 'above-average',
      interpretation: 'You already have meaningful clarity. Your next step may be turning that awareness into consistent and intentional action.',
    },
  ],

  categoryInterpretations: {
    career: {
      low: 'Your answers suggest that your current work may not feel fully aligned with the person you are becoming. This does not necessarily mean making a dramatic change. It may be an invitation to explore what gives you energy, where your strengths are underused and what meaningful contribution could look like next.',
      moderate: 'You have some sense of what matters to you professionally, but there may be room to explore whether your current path still fits. This can be a gentle nudge to check in with your ambitions and values.',
      high: 'You have a strong sense of purpose and direction in your work. Your career appears to be a source of energy and meaning. The next step may be about deepening or expanding this alignment.',
    },
    finances: {
      low: 'Financial concerns can weigh heavily. Your answers suggest this area may feel uncertain or stressful right now. The first step is not a complete financial overhaul — it is building awareness and taking one small, manageable action toward feeling more in control.',
      moderate: 'You have some level of financial stability, but there may be areas where you would like more freedom or confidence. This is a good time to clarify what financial wellbeing means to you.',
      high: 'You feel secure and in control of your financial life. This stability provides a strong foundation from which to make intentional choices about your future.',
    },
    health: {
      low: 'Your energy and wellbeing may feel depleted right now. This is not a sign of failure — it is a signal that your needs deserve attention. Even small, consistent actions to care for your body and mind can create meaningful change over time.',
      moderate: 'You are managing your health and energy reasonably well, though there may be room to prioritise rest, movement or nourishment more intentionally. Small adjustments can make a significant difference.',
      high: 'You prioritise your health and it shows. Your energy levels and daily habits support the life you want to live. Continue protecting this foundation.',
    },
    relationships: {
      low: 'Your relationships may feel unsupportive or draining at this time. This can be deeply isolating, but it also reveals what you truly need from the people around you. Honouring your boundaries is a courageous first step.',
      moderate: 'You have meaningful connections in your life, though some relationships may need more honest communication or healthier boundaries. It is okay to ask for what you need.',
      high: 'You are surrounded by people who support and value you. Your relationships are a source of strength and authenticity. Nurture them.',
    },
    personalGrowth: {
      low: 'You may feel as though you have been standing still. Growth does not always mean big changes — sometimes it begins with curiosity, a new question or a small step outside your comfort zone.',
      moderate: 'You are open to growth and learning, even if the path is not always clear. Trust that small, consistent steps are moving you in the right direction.',
      high: 'You are actively evolving and becoming more of who you want to be. Your commitment to personal growth is one of your greatest strengths.',
    },
    'fun-recreation': {
      low: 'Joy and rest may have been pushed aside by responsibilities. This is common when life feels heavy, but you deserve moments of lightness. Allowing yourself to enjoy something small can be a powerful act of self-care.',
      moderate: 'You have some sources of joy and relaxation in your life, but there may be room to give yourself fuller permission to rest and play without guilt.',
      high: 'You make space for joy, rest and activities that replenish you. This is a sign of healthy boundaries and self-awareness. Protect this time.',
    },
    environment: {
      low: 'Your surroundings may feel chaotic, draining or unsupportive. This can quietly affect your mood and clarity. You do not need a complete overhaul — even one small change to your space can create a sense of calm and belonging.',
      moderate: 'Your environment is mostly supportive, but there may be areas where more order, beauty or personal space would help you feel more at ease.',
      high: 'Your home and surroundings nourish you. You have created an environment that supports clarity, calm and recharge. This is a valuable foundation.',
    },
    'purpose-fulfilment': {
      low: 'A sense of meaning may feel distant right now. This is not unusual during transitions. Purpose does not always arrive as a big revelation — it often emerges through small moments of connection, creativity and contribution.',
      moderate: 'You have glimpses of meaning and direction, even if the full picture is not yet clear. Trust that purpose can coexist with uncertainty.',
      high: 'Your life feels rich with meaning and direction. You have a strong sense of what matters to you and are actively moving toward it.',
    },
  },

  workbookRecommendations: {
    career: ['Future You', 'Values', 'Strengths', 'Goals'],
    finances: ['Future You', 'Values', 'Goals and Action Plan'],
    health: ['Energy Audit', 'Future You', 'Action Plan'],
    relationships: ['Values', 'Energy Audit', 'boundaries and action planning'],
    'personal-growth': ['Strengths', 'Future You', 'Goals'],
    'fun-recreation': ['Energy Audit', 'Future You', 'Action Plan'],
    environment: ['Energy Audit', 'Future You', 'Goals'],
    'purpose-fulfilment': ['Story So Far', 'Values', 'Strengths', 'Future You'],
  },

  workbookCta: {
    intro: 'Your assessment has shown you where to begin.',
    copy: 'Design Your Next Chapter helps you explore why these areas feel the way they do, reconnect with what matters to you and create a practical plan for what comes next.',
    buttonText: 'Get the Design Your Next Chapter Workbook',
    purchaseUrl: 'https://next-chapter-studio.com/#pricing',
  },

  analyticsEvents: {
    pageViewed: 'audit_page_viewed',
    started: 'audit_started',
    abandoned: 'audit_abandoned',
    completed: 'audit_completed',
    resultsViewed: 'audit_results_viewed',
    emailSubmitted: 'audit_email_submitted',
    workbookCta: 'audit_workbook_cta_clicked',
    resultsDownloaded: 'audit_results_downloaded',
    retaken: 'audit_retaken',
  },

  retakeIntervals: [
    { label: '30 days', days: 30 },
    { label: '90 days', days: 90 },
    { label: '6 months', days: 180 },
    { label: '1 year', days: 365 },
  ],
};
