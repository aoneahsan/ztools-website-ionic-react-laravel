import CONSTANTS from '@/utils/constants';

const workspaceIdParam = CONSTANTS.RouteParams.workspace.workspaceId;

const ZaionsRoutes = {
	// Main routes
	HomeRoute: '/',
	LoginRoute: '/sign-in',
	SignUpRoute: '/sign-up',
	PasswordResetEmailForm: '/forgot-password',

	percentageCalculator: '/percentage-calculator',
	wordCounter: '/word-counter',

	// Company Section
	Company: {
		ZaionsAboutRoute: '/pages/about',
		ZaionsContactRoute: '/pages/contact',
		ZaionsCareersRoute: '/pages/careers',
		ZaionsPartnersRoute: '/pages/partners',
		ZaionsPressRoute: '/pages/press',
		ZaionsReviewsRoute: '/pages/reviews',
	},

	// Admin Panel
	AdminPanel: {
		AppStartupPage: '/app/startup',

		Workspaces: {
			Main: '/workspaces',
			Create: '/workspaces/create',
			Edit: `/workspaces/edit/${CONSTANTS.RouteParams.workspace.editWorkspaceIdParam}`,
			View: `/workspaces/${workspaceIdParam}/view`,
		},

		ZaionsDashboard: {
			ZLinks: '/links',
			ZProfile: '/settings/profile/',
		},
	},

	Testing: {
		ReactTable: {
			Main: '/testing/react-table',
		},
		ReactArea: {
			Main: '/testing/react-area',
		},
		ReactCharts: {
			Main: '/testing/charts',
		},
		AWS_AMPLIFY: {
			Main: '/testing/aws-amplify/blog-project',
		},
		GOOGLE_MAP: {
			Main: '/testing/google-map/map1',
		},
		TestingTabs: {
			Main: '/testing/testing-tabs-page',
		},
		IonComponents: {
			Main: '/testing/testing-ion-components',
		},
	},
};

export const ZRoutesRedirects = {
	// Redirects
	// AUTHENTICATED_USER_REDIRECT
	AUTHENTICATED_USER_REDIRECT: ZaionsRoutes.AdminPanel.AppStartupPage,

	// UNAUTHENTICATED_USER_REDIRECT
	UNAUTHENTICATED_USER_REDIRECT: ZaionsRoutes.LoginRoute,

	// UNAUTHENTICATED_USER_REDIRECT
	LOGOUT_USER_REDIRECT: ZaionsRoutes.HomeRoute,
};

export default ZaionsRoutes;
