const disabledState = {
	lightDisabled:     '#cccccc',
	darkDisabled:      '#313146',
	lightDisabledText: '#F0F4F8',
	darkDisabledText:  '#9999b0',
}

const theme = {
	zIndex: {
		mobileStepper:    1000,
		fab:              1050,
		sideBar:          1080,
		appBar:           1100,
		permanentSideBar: 1150,
		drawer:           1200,
		backdrop:         1220,
		select:           1250,
		modal:            1300,
		snackbar:         1400,
		tooltip:          1500,
	},

	screens: {
		xs:  0,
		sm:  576,
		md:  768,
		lg:  992,
		xl:  1200,
		xl2: 1500,
		xl3: 1800,
	},

	colorScheme: {
		primary:      '#5F9BF3',
		secondary:    '#e08e73',
		tertiary:     '#F3D9DA',
		overlaysDark: '#313146',
		success:      '#31D0AA',
		error:        '#D03131',
		dark:         '#2A2A36',
		dark2:        '#2c2c39',
		light:        '#FAFCFE',
		light2:       '#f3f6f8',
		accent:       '#F0F4F8',
		iris:         '#EFEFFD',
		header1:      '#1F1F1F',
		header2:      '#484848',
		header3:      '#202036',
		body1:        '#535373',
		body2:        '#787898',
		subtitle1:    '#9999b0',
		subtitle2:    '#cccccc',
		subtitle3:    '#939393',
		white:        '#ffffff',
	},

	colorSchemeByState: {
		primary:   {
			default: '#5F9BF3',
			hover:   '#82b2f6',
			active:  '#437bcb',
			...disabledState,
		},
		secondary: {
			default:  '#e08e73',
			hover:    '#f1a48a',
			active:   '#c7806a',
			disabled: '#cccccc',
			...disabledState,
		},
		success:   {
			default:  '#31D0AA',
			hover:    '#42e8bf',
			active:   '#25af8f',
			disabled: '#cccccc',
			...disabledState,
		},
		body2:     {
			default:  '#787898',
			hover:    '#8e8eb0',
			active:   '#6a6a88',
			disabled: '#cccccc',
			...disabledState,
		},
		accent:    {
			default:  '#F0F4F8',
			hover:    '#ffffff',
			active:   '#e1e3e7',
			disabled: '#cccccc',
			...disabledState,
		},
	},

	shadows: {
		1: '0 3px 10px rgba(0, 0, 0, 0.08)',
		2: '0 2px 8px rgba(0, 0, 0, 0.1)',
		3: '0 2px 4px rgba(0, 0, 0, 0.15)',
		4: '0 4px 8px rgba(0, 0, 0, 0.15)',
		5: '0 1px 2px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2)',
		6: '0px 5px 4px rgba(0, 0, 0, 0.4)',
	},

	colors: {
		white: '#fff',
		black: '#000',

		light_50:  '#fdfdfd',
		light_100: '#fcfcfc',
		light_200: '#fafafa',
		light_300: '#f8f9fa',
		light_400: '#f6f6f6',
		light_500: '#f2f2f2',
		light_600: '#f1f3f5',
		light_700: '#e9ecef',
		light_800: '#dee2e6',
		light_900: '#dde1e3',

		dark_50:  '#4a4a4a',
		dark_100: '#3c3c3c',
		dark_200: '#323232',
		dark_300: '#2d2d2d',
		dark_400: '#222222',
		dark_500: '#1f1f1f',
		dark_600: '#1c1c1e',
		dark_700: '#1b1b1b',
		dark_800: '#181818',
		dark_900: '#0f0f0f',

		slate_50:  '#f8fafc',
		slate_100: '#f1f5f9',
		slate_200: '#e2e8f0',
		slate_300: '#cbd5e1',
		slate_400: '#94a3b8',
		slate_500: '#64748b',
		slate_600: '#475569',
		slate_700: '#334155',
		slate_800: '#1e293b',
		slate_900: '#0f172a',

		gray_50:  '#f9fafb',
		gray_100: '#f3f4f6',
		gray_200: '#e5e7eb',
		gray_300: '#d1d5db',
		gray_400: '#9ca3af',
		gray_500: '#6b7280',
		gray_600: '#4b5563',
		gray_700: '#374151',
		gray_800: '#1f2937',
		gray_900: '#111827',

		zinc_50:  '#fafafa',
		zinc_100: '#f4f4f5',
		zinc_200: '#e4e4e7',
		zinc_300: '#d4d4d8',
		zinc_400: '#a1a1aa',
		zinc_500: '#71717a',
		zinc_600: '#52525b',
		zinc_700: '#3f3f46',
		zinc_800: '#27272a',
		zinc_900: '#18181b',


		netural_50:  '#fafafa',
		netural_100: '#f5f5f5',
		netural_200: '#e5e5e5',
		netural_300: '#d4d4d4',
		netural_400: '#a3a3a3',
		netural_500: '#737373',
		netural_600: '#525252',
		netural_700: '#404040',
		netural_800: '#262626',
		netural_900: '#171717',

		stone_50:  '#fafaf9',
		stone_100: '#f5f5f4',
		stone_200: '#e7e5e4',
		stone_300: '#d6d3d1',
		stone_400: '#a8a29e',
		stone_500: '#78716c',
		stone_600: '#57534e',
		stone_700: '#44403c',
		stone_800: '#292524',
		stone_900: '#1c1917',

		red_50:  '#fef2f2',
		red_100: '#fee2e2',
		red_200: '#fecaca',
		red_300: '#fca5a5',
		red_400: '#f87171',
		red_500: '#ef4444',
		red_600: '#dc2626',
		red_700: '#b91c1c',
		red_800: '#991b1b',
		red_900: '#7f1d1d',

		orange_50:  '#fff7ed',
		orange_100: '#ffedd5',
		orange_200: '#fed7aa',
		orange_300: '#fdba74',
		orange_400: '#fb923c',
		orange_500: '#f97316',
		orange_600: '#ea580c',
		orange_700: '#c2410c',
		orange_800: '#9a3412',
		orange_900: '#7c2d12',

		amber_50:  '#fffbeb',
		amber_100: '#fef3c7',
		amber_200: '#fde68a',
		amber_300: '#fcd34d',
		amber_400: '#fbbf24',
		amber_500: '#f59e0b',
		amber_600: '#d97706',
		amber_700: '#b45309',
		amber_800: '#92400e',
		amber_900: '#78350f',


		yellow_50:  '#fefce8',
		yellow_100: '#fef9c3',
		yellow_200: '#fef08a',
		yellow_300: '#fde047',
		yellow_400: '#facc15',
		yellow_500: '#eab308',
		yellow_600: '#ca8a04',
		yellow_700: '#a16207',
		yellow_800: '#854d0e',
		yellow_900: '#713f12',

		lime_50:  '#f7fee7',
		lime_100: '#ecfccb',
		lime_200: '#d9f99d',
		lime_300: '#bef264',
		lime_400: '#a3e635',
		lime_500: '#84cc16',
		lime_600: '#65a30d',
		lime_700: '#4d7c0f',
		lime_800: '#3f6212',
		lime_900: '#365314',

		green_50:  '#f0fdf4',
		green_100: '#dcfce7',
		green_200: '#bbf7d0',
		green_300: '#86efac',
		green_400: '#4ade80',
		green_500: '#22c55e',
		green_600: '#16a34a',
		green_700: '#15803d',
		green_800: '#166534',
		green_900: '#14532d',

		emerald_50:  '#ecfdf5',
		emerald_100: '#d1fae5',
		emerald_200: '#a7f3d0',
		emerald_300: '#6ee7b7',
		emerald_400: '#34d399',
		emerald_500: '#10b981',
		emerald_600: '#059669',
		emerald_700: '#047857',
		emerald_800: '#065f46',
		emerald_900: '#064e3b',

		teal_50:  '#f0fdfa',
		teal_100: '#ccfbf1',
		teal_200: '#99f6e4',
		teal_300: '#5eead4',
		teal_400: '#2dd4bf',
		teal_500: '#14b8a6',
		teal_600: '#0d9488',
		teal_700: '#0f766e',
		teal_800: '#115e59',
		teal_900: '#134e4a',

		cyan_50:  '#ecfeff',
		cyan_100: '#cffafe',
		cyan_200: '#a5f3fc',
		cyan_300: '#67e8f9',
		cyan_400: '#22d3ee',
		cyan_500: '#06b6d4',
		cyan_600: '#0891b2',
		cyan_700: '#0e7490',
		cyan_800: '#155e75',
		cyan_900: '#164e63',

		sky_50:  '#f0f9ff',
		sky_100: '#e0f2fe',
		sky_200: '#bae6fd',
		sky_300: '#7dd3fc',
		sky_400: '#38bdf8',
		sky_500: '#0ea5e9',
		sky_600: '#0284c7',
		sky_700: '#0369a1',
		sky_800: '#075985',
		sky_900: '#0c4a6e',

		blue_50:  '#eff6ff',
		blue_100: '#dbeafe',
		blue_200: '#bfdbfe',
		blue_300: '#93c5fd',
		blue_400: '#60a5fa',
		blue_500: '#3b82f6',
		blue_600: '#2563eb',
		blue_700: '#1d4ed8',
		blue_800: '#1e40af',
		blue_900: '#1e3a8a',

		indigo_50:  '#eef2ff',
		indigo_100: '#e0e7ff',
		indigo_200: '#c7d2fe',
		indigo_300: '#a5b4fc',
		indigo_400: '#818cf8',
		indigo_500: '#6366f1',
		indigo_600: '#4f46e5',
		indigo_700: '#4338ca',
		indigo_800: '#3730a3',
		indigo_900: '#312e81',

		violet_50:  '#f5f3ff',
		violet_100: '#ede9fe',
		violet_200: '#ddd6fe',
		violet_300: '#c4b5fd',
		violet_400: '#a78bfa',
		violet_500: '#8b5cf6',
		violet_600: '#7c3aed',
		violet_700: '#6d28d9',
		violet_800: '#5b21b6',
		violet_900: '#4c1d95',

		purple_50:  '#faf5ff',
		purple_100: '#f3e8ff',
		purple_200: '#e9d5ff',
		purple_300: '#d8b4fe',
		purple_400: '#c084fc',
		purple_500: '#a855f7',
		purple_600: '#9333ea',
		purple_700: '#7e22ce',
		purple_800: '#6b21a8',
		purple_900: '#581c87',

		fuchsia_50:  '#fdf4ff',
		fuchsia_100: '#fae8ff',
		fuchsia_200: '#f5d0fe',
		fuchsia_300: '#f0abfc',
		fuchsia_400: '#e879f9',
		fuchsia_500: '#d946ef',
		fuchsia_600: '#c026d3',
		fuchsia_700: '#a21caf',
		fuchsia_800: '#86198f',
		fuchsia_900: '#701a75',

		pink_50:  '#fdf2f8',
		pink_100: '#fce7f3',
		pink_200: '#fbcfe8',
		pink_300: '#f9a8d4',
		pink_400: '#f472b6',
		pink_500: '#ec4899',
		pink_600: '#db2777',
		pink_700: '#be185d',
		pink_800: '#9d174d',
		pink_900: '#831843',

		rose_50:  '#fff1f2',
		rose_100: '#ffe4e6',
		rose_200: '#fecdd3',
		rose_300: '#fda4af',
		rose_400: '#fb7185',
		rose_500: '#f43f5e',
		rose_600: '#e11d48',
		rose_700: '#be123c',
		rose_800: '#9f1239',
		rose_900: '#881337',
	},
}

export type ThemeColor = typeof theme.colors[keyof typeof theme.colors]

export default theme
