export type ReleaseStatus = 'Production' | 'Closed Testing' | 'Coming Soon';

export interface AppFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface AppScreenshot {
  url: string;
  caption: string;
  category?: 'core' | 'ai' | 'features';
}

export interface AppData {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  packageName: string;
  releaseStatus: ReleaseStatus;
  statusBadge: string;
  playStoreUrl: string | null;
  githubUrl: string;
  accentColor: string;
  gradient: string;
  highlights: string[];
  features: AppFeature[];
  screenshots: AppScreenshot[];
  techStack: {
    language: string[];
    ui: string[];
    architecture: string[];
    cloudBackend: string[];
    aiServices?: string[];
    integrations?: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const APPS_DATA: AppData[] = [
  {
    id: 'kchat',
    name: 'K Chat: Make Messaging Smarter',
    tagline: 'Real-Time Communication × Context Intelligence × Modern Android',
    shortDescription: 'Combines direct & group messaging, multimedia sharing, HD voice/video calling, and contextual AI tools in a high-performance Android client.',
    fullDescription: 'K Chat is a modern real-time messaging application engineered with Kotlin and Jetpack Compose. Beyond rapid, encrypted 1:1 and group communication, K Chat introduces deep contextual intelligence—offering instant smart replies, automated thread summarization, natural-language conversation search, and real-time scam threat heuristics. It also features a system-wide K Chat Extension, allowing contextual AI utilities to be used across any messaging app.',
    icon: '/assets/apps/kchat/KChatLogo.png',
    packageName: 'com.kunal.kchat',
    releaseStatus: 'Production',
    statusBadge: 'Production • Live on Google Play',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kunal.kchat',
    githubUrl: 'https://github.com/programmer-kunal/KChat',
    accentColor: '#0755E8',
    gradient: 'from-blue-600 via-indigo-600 to-sky-500',
    highlights: [
      'Real-time 1:1 & Group Chat with live typing, delivery and read receipts',
      'ZEGOCLOUD HD Voice & Video Calling with active call states',
      'Firebase AI Logic + Google Gemini integration for conversational context',
      'Smart Reply, Thread Summary, Context Search, and Scam Guard heuristic shield',
      'Floating K Chat Extension accessible across third-party communication tools',
      'Encrypted message delivery and local Room caching'
    ],
    features: [
      {
        title: 'Smart Reply Pills',
        description: 'Analyzes recent conversation history to provide 3 contextually aware reply options, respecting the tone and nuances of incoming messages.',
        iconName: 'MessageSquareText'
      },
      {
        title: 'Thread Summary',
        description: 'Generates structured bulleted recaps of lengthy group conversations or missed discussions so users catch up in seconds.',
        iconName: 'FileText'
      },
      {
        title: 'Semantic Context Search',
        description: 'Enables natural-language search across entire message archives, finding relevant topics and conversations without requiring exact keyword matches.',
        iconName: 'Search'
      },
      {
        title: 'Scam Guard Heuristics',
        description: 'Intelligent security shield evaluating incoming texts for phishing patterns, impersonation, fraudulent requests, and hazardous URLs.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'ZEGOCLOUD Calling',
        description: 'High-definition low-latency 1:1 voice and video calling with dedicated incoming/outgoing call screens and real-time connection state management.',
        iconName: 'PhoneCall'
      },
      {
        title: 'System-wide Extension',
        description: 'Floating overlay service bringing K Chat AI intelligence tools directly into other external messaging apps via Android accessibility services.',
        iconName: 'Layers'
      }
    ],
    screenshots: [
      {
        url: '/assets/apps/kchat/DirectChatHomeScreen.jpg',
        caption: 'Direct Chat Feed & Recents',
        category: 'core'
      },
      {
        url: '/assets/apps/kchat/ChattingScreen.jpg',
        caption: '1:1 Interactive Conversation',
        category: 'core'
      },
      {
        url: '/assets/apps/kchat/SmartReplyUI.jpg',
        caption: 'Contextual Smart Reply Suggestions',
        category: 'ai'
      },
      {
        url: '/assets/apps/kchat/ThreadSummaryUI.jpg',
        caption: 'AI Automated Thread Summaries',
        category: 'ai'
      },
      {
        url: '/assets/apps/kchat/ScamGuardUI.jpg',
        caption: 'Scam Guard Threat Detection',
        category: 'ai'
      },
      {
        url: '/assets/apps/kchat/ContextSearchUI.jpg',
        caption: 'Natural-Language Context Search',
        category: 'ai'
      },
      {
        url: '/assets/apps/kchat/GroupChatHomeScreen.jpg',
        caption: 'Collaborative Group Channels',
        category: 'features'
      },
      {
        url: '/assets/apps/kchat/KChatExtensionUI.jpg',
        caption: 'System Overlay AI Extension',
        category: 'features'
      }
    ],
    techStack: {
      language: ['Kotlin', 'TypeScript'],
      ui: ['Jetpack Compose (Material 3)', 'Modern Android Theming'],
      architecture: ['Clean Architecture', 'MVVM Pattern', 'Kotlin Coroutines & Flow', 'Room Caching'],
      cloudBackend: ['Firebase Auth', 'Firebase Realtime Database', 'Firebase Cloud Messaging (FCM)', 'Supabase Storage'],
      aiServices: ['Firebase AI Logic', 'Google Gemini Pro / Flash Models'],
      integrations: ['ZEGOCLOUD Voice & Video SDK', 'Android Accessibility Services']
    },
    metrics: [
      { label: 'Active Release Channel', value: 'Google Play Production' },
      { label: 'Device Acquisitions', value: '29 (+61% MoM)' },
      { label: 'Monthly Active Devices', value: '13 Verified Devices' },
      { label: 'Security Model', value: 'Local Encryption + Room DB' }
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Seamless Onboarding',
        description: 'Quick phone or credential verification with Firebase Auth, establishing an encrypted device session with synchronized profile state.'
      },
      {
        step: '02',
        title: 'Real-Time Sync',
        description: 'Real-time WebSocket and Firebase listeners maintain instant two-way message delivery, presence status, and typing indicators.'
      },
      {
        step: '03',
        title: 'Contextual AI Processing',
        description: 'Incoming and outgoing threads are analyzed on-device or via secure Firebase Gemini pipelines to generate summaries, threat alerts, and replies.'
      },
      {
        step: '04',
        title: 'Everywhere Intelligence',
        description: 'Enable the K Chat system overlay to leverage K Chat AI capabilities inside any third-party app without switching contexts.'
      }
    ]
  },
  {
    id: 'weathersnap',
    name: 'WeatherSnap: Snap The Weather',
    tagline: 'Live Crowd Weather Reporting & Precision Meteorological Data',
    shortDescription: 'Combines open meteorological forecasts with photo-verified crowdsourced weather reports and hyper-local community feeds.',
    fullDescription: 'WeatherSnap bridges the gap between numerical satellite forecasts and what people actually experience on the ground. By pairing high-precision atmospheric data from the Open-Meteo API with geo-tagged live photo reports submitted by the community, WeatherSnap allows users to explore live sky conditions, verify forecasts visually, and share hyperlocal weather updates in real time.',
    icon: '/assets/apps/weathersnap/icon.jpg',
    packageName: 'com.kunal.weathersnap',
    releaseStatus: 'Closed Testing',
    statusBadge: 'Closed Testing • Coming Soon to Google Play',
    playStoreUrl: null, // Verified: Still in Closed Testing, no fake download links
    githubUrl: 'https://github.com/programmer-kunal/WeatherSnap',
    accentColor: '#16D9F2',
    gradient: 'from-cyan-500 via-teal-500 to-blue-600',
    highlights: [
      'Comprehensive real-time atmospheric forecast metrics powered by Open-Meteo',
      'Live camera integration with CameraX to capture instantaneous ground conditions',
      'Community crowd reporting feed with verified photos and location tags',
      'Filtering reports by weather phenomenon (Clear, Rain, Storm, Snow, Fog, Clouds)',
      'Frictionless anonymous Supabase device identification for instant contributions',
      'Local offline storage and report management using Room Database'
    ],
    features: [
      {
        title: 'Precision Atmospheric Data',
        description: 'Access live temperature, feels-like metrics, humidity, atmospheric pressure, wind velocity, UV index, and precipitation probability.',
        iconName: 'SunMedium'
      },
      {
        title: 'Ground Truth Photo Capture',
        description: 'Integrated CameraX pipeline allowing users to take authentic snapshots of current sky and weather conditions.',
        iconName: 'Camera'
      },
      {
        title: 'Hyperlocal Community Feed',
        description: 'Browse a chronological feed of community-submitted weather reports with timestamps, visual photos, and atmospheric tags.',
        iconName: 'Users'
      },
      {
        title: 'Weather Condition Filtering',
        description: 'Instantly filter community feeds by weather state—such as thunderstorm, downpour, heavy fog, snowfall, or clear sunny skies.',
        iconName: 'Filter'
      },
      {
        title: 'Frictionless Anonymous ID',
        description: 'Zero barrier to entry: Supabase anonymous UUID identification enables immediate reporting while maintaining content accountability.',
        iconName: 'UserCheck'
      },
      {
        title: 'Offline Management & Sync',
        description: 'Store drafted or personal weather submissions locally in Room DB with full authority to inspect or delete personal contributions.',
        iconName: 'HardDrive'
      }
    ],
    screenshots: [
      {
        url: '/assets/apps/weathersnap/home.jpg',
        caption: 'Live Meteorological Dashboard',
        category: 'core'
      },
      {
        url: '/assets/apps/weathersnap/create.jpg',
        caption: 'Capture & Publish Live Weather Snap',
        category: 'core'
      },
      {
        url: '/assets/apps/weathersnap/allreports.jpg',
        caption: 'Community Crowd Weather Feed',
        category: 'features'
      },
      {
        url: '/assets/apps/weathersnap/reports.jpg',
        caption: 'Saved & Filtered Local Reports',
        category: 'features'
      },
      {
        url: '/assets/apps/weathersnap/myreports.jpg',
        caption: 'Personal Contributions & Management',
        category: 'features'
      },
      {
        url: '/assets/apps/weathersnap/splash.jpg',
        caption: 'WeatherSnap Animated Launch Screen',
        category: 'core'
      }
    ],
    techStack: {
      language: ['Kotlin'],
      ui: ['Jetpack Compose', 'Material 3 Components'],
      architecture: ['MVVM Architecture', 'StateFlow', 'Room Database Cache'],
      cloudBackend: ['Supabase Database (PostgreSQL)', 'Supabase Storage Bucket'],
      integrations: ['Open-Meteo REST API', 'Android CameraX', 'FusedLocationProviderClient']
    },
    metrics: [
      { label: 'Release Track', value: 'Google Play Closed Testing' },
      { label: 'Active Testers', value: '14 Active Devices' },
      { label: 'Forecast Engine', value: 'Open-Meteo Integration' },
      { label: 'Identity Layer', value: 'Supabase Anonymous Auth' }
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Detect Atmospheric Readings',
        description: 'Queries Open-Meteo using high-accuracy FusedLocationProviderClient coordinates for real-time meteorological metrics.'
      },
      {
        step: '02',
        title: 'Snap Visual Sky Proof',
        description: 'CameraX captures live sky conditions, stamping the image with current temperature, condition tags, and coordinates.'
      },
      {
        step: '03',
        title: 'Broadcast to Crowd Feed',
        description: 'Uploads report metadata and image assets to Supabase Storage, publishing immediately to nearby users on the community board.'
      },
      {
        step: '04',
        title: 'Filter & Verify Conditions',
        description: 'Travelers and locals filter the crowd feed to see actual photographic proof of conditions before heading outdoors.'
      }
    ]
  },
  {
    id: 'sfinder',
    name: 'S Finder: Discover WhatToWatch',
    tagline: 'Intelligent Entertainment Discovery Powered by Hybrid Full-Text & Gemini AI',
    shortDescription: 'Natural-language movie and TV series discovery engine that helps you find what to watch when you cannot remember the exact title.',
    fullDescription: 'S Finder is an entertainment discovery application developed under the KAVTORS brand ("From KAVTORS"). Built with Kotlin, Jetpack Compose, and an ultra-fast Cloudflare Workers + D1 backend, S Finder eliminates the frustration of tip-of-the-tongue movie searches. Users can search using natural story descriptions, cinematic tropes, mood preferences, remembered scenes, or conversational Hindi/Hinglish phrasing.',
    icon: '/assets/apps/sfinder/icon.jpg',
    packageName: 'com.kunal.sfinder',
    releaseStatus: 'Closed Testing',
    statusBadge: 'Closed Testing • Coming Soon to Google Play',
    playStoreUrl: null, // Verified: Still in Closed Testing, no fake download links
    githubUrl: 'https://github.com/programmer-kunal/S-Finder',
    accentColor: '#D4AF65',
    gradient: 'from-amber-600 via-rose-700 to-slate-900',
    highlights: [
      'Natural-language plot recall ("plane crash survivors on an island with supernatural secrets")',
      'Cinematic trope discovery ("enemies to lovers", "heist where the plan goes wrong")',
      'Multilingual query normalization handling colloquial Hindi and Hinglish seamlessly',
      'Typo-tolerant retrieval recovering from character transpositions and phonetic misspellings',
      'AI match explanations detailing exactly why each title matches your search intent',
      'Distraction-free "Midnight Cinema" aesthetic with obsidian, champagne gold, and velvet tones'
    ],
    features: [
      {
        title: 'Natural-Language Story Recall',
        description: 'Search using vague memories, fragmented plotlines, or distinctive scenes when you have completely forgotten the film or show title.',
        iconName: 'Sparkles'
      },
      {
        title: 'Deep Trope & Mood Matching',
        description: 'Explore cinematic archetypes ("time loop reliving the past", "wholesome heartwarming comedy", "gritty psychological thriller").',
        iconName: 'Compass'
      },
      {
        title: 'Hinglish & Multilingual Queries',
        description: 'Normalize bilingual search queries like "mujhe ek romantic movie chahiye jisme unexpected twist ho" with zero language barrier.',
        iconName: 'Languages'
      },
      {
        title: 'Typo-Tolerant Engine',
        description: 'Combines SQLite FTS5 BM25 scoring with Gemini query analysis to effortlessly recover from misspellings and transposed characters.',
        iconName: 'CheckCircle2'
      },
      {
        title: 'Transparent Match Explanations',
        description: 'Every recommendation displays a concise AI explanation highlighting why the result aligns with your particular scenario.',
        iconName: 'HelpCircle'
      },
      {
        title: 'Granular Catalog Filtering',
        description: 'Filter across unified Movie & TV Series catalogs by media format, genres, release eras, and country of origin with infinite pagination.',
        iconName: 'SlidersHorizontal'
      }
    ],
    screenshots: [
      {
        url: '/assets/apps/sfinder/splash.jpeg',
        caption: 'Midnight Cinema Launch Screen (From KAVTORS)',
        category: 'core'
      },
      {
        url: '/assets/apps/sfinder/home.jpeg',
        caption: 'Discovery Interface & Search Suggestions',
        category: 'core'
      },
      {
        url: '/assets/apps/sfinder/multilingual.jpeg',
        caption: 'Natural Language & Hinglish Query Processing',
        category: 'ai'
      },
      {
        url: '/assets/apps/sfinder/results.jpeg',
        caption: 'Semantic Search Results with Match Explanations',
        category: 'ai'
      },
      {
        url: '/assets/apps/sfinder/filters.jpeg',
        caption: 'Granular Media Type & Genre Filter Dialog',
        category: 'features'
      },
      {
        url: '/assets/apps/sfinder/filter-results.jpeg',
        caption: 'Multi-criteria Filtered Results & Pagination',
        category: 'features'
      }
    ],
    techStack: {
      language: ['Kotlin 2.2.10', 'TypeScript'],
      ui: ['Jetpack Compose (Compose BOM 2026.02.01)', 'Material 3 Midnight Cinema Palette'],
      architecture: ['Clean Architecture', 'MVVM with Coroutines & StateFlow', 'CompileSdk 36'],
      cloudBackend: ['Cloudflare Workers (Edge Serverless)', 'Cloudflare D1 (SQLite with FTS5 / BM25)'],
      aiServices: ['Google Gemini API (gemini-3.1-flash-lite semantic analysis)'],
      integrations: ['TVmaze REST API for metadata enrichment and verified posters']
    },
    metrics: [
      { label: 'Release Track', value: 'Google Play Closed Testing' },
      { label: 'Edge Latency', value: '<50ms via Cloudflare Workers' },
      { label: 'Search Model', value: 'Hybrid FTS5 + Gemini Flash' },
      { label: 'Test Coverage', value: '227 Verified Backend Tests' }
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Input Your Thought',
        description: 'Type anything: a one-word vibe, a Hindi prompt, a trope, or an elaborate memory of a movie scene you watched years ago.'
      },
      {
        step: '02',
        title: 'Semantic Query Analysis',
        description: 'Cloudflare Worker routes the query to Google Gemini for intent parsing, genre extraction, and Hinglish semantic translation.'
      },
      {
        step: '03',
        title: 'Hybrid FTS5 & BM25 Scoring',
        description: 'Queries Cloudflare D1 SQLite database with full-text indexing, weighting keywords against plot summaries and cast metadata.'
      },
      {
        step: '04',
        title: 'Enriched Results with Reasoning',
        description: 'Displays verified TVmaze poster artwork alongside clear, tailored match explanations indicating why each title was selected.'
      }
    ]
  }
];

export const BRAND_INFO = {
  name: 'KAVTORS',
  tagline: 'Building Modern Digital Experiences',
  foundingYear: '2024',
  developerAccount: 'KAVTORS (Account ID: 7594727160353104737)',
  philosophy: [
    {
      title: 'Innovation',
      description: 'Challenging conventional interface paradigms to invent more expressive, fluid, and intuitive interactions.',
      iconName: 'Lightbulb'
    },
    {
      title: 'Practical AI',
      description: 'Applying artificial intelligence not as a novelty, but as high-utility features that solve daily communication and discovery challenges.',
      iconName: 'Cpu'
    },
    {
      title: 'Modern Solutions',
      description: 'Architecting for responsiveness, resilience, and speed utilizing state-of-the-art native Android and edge-cloud stacks.',
      iconName: 'Smartphone'
    },
    {
      title: 'People First',
      description: 'Putting real human privacy, clarity, and delight at the forefront of every product design decision we execute.',
      iconName: 'Users'
    }
  ],
  stats: [
    { label: 'Ecosystem Applications', value: '3 Active Apps' },
    { label: 'Production Track', value: 'Google Play Certified' },
    { label: 'Architecture', value: '100% Jetpack Compose' },
    { label: 'AI Intelligence', value: 'Google Gemini Powered' }
  ]
};
