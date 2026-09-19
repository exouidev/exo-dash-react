import React, { Suspense } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import { AppShell } from "./components/layout/app-shell"
import { AuthLayout } from "./components/layout/auth-layout"
import { ProtectedRoute } from "./components/layout/protected-route"
import { NotFoundPage } from "./pages/not-found"
const ProComponents = React.lazy(() => import("./pages/pro-components").then(m => ({ default: m.ProComponents })))

// Lazy-loaded pages
const EcommerceDashboard = React.lazy(() => import("./pages/dashboard/ecommerce").then(m => ({ default: m.EcommerceDashboard })))

const AlertsPage = React.lazy(() => import("./pages/components/alerts").then(m => ({ default: m.AlertsPage })))
const AvatarsPage = React.lazy(() => import("./pages/components/avatars").then(m => ({ default: m.AvatarsPage })))
const BadgesPage = React.lazy(() => import("./pages/components/badges").then(m => ({ default: m.BadgesPage })))
const ButtonsPage = React.lazy(() => import("./pages/components/buttons").then(m => ({ default: m.ButtonsPage })))
const CardsPage = React.lazy(() => import("./pages/components/cards").then(m => ({ default: m.CardsPage })))
const EmptyStatesPage = React.lazy(() => import("./pages/components/empty-states").then(m => ({ default: m.EmptyStatesPage })))
const ProgressPage = React.lazy(() => import("./pages/components/progress").then(m => ({ default: m.ProgressPage })))
const TimelinesPage = React.lazy(() => import("./pages/components/timelines").then(m => ({ default: m.TimelinesPage })))
const TypographyPage = React.lazy(() => import("./pages/components/typography").then(m => ({ default: m.TypographyPage })))
const AccordionDemoPage = React.lazy(() => import("./pages/components/accordion-demo").then(m => ({ default: m.AccordionDemoPage })))

const DataTablePage = React.lazy(() => import("./pages/components/data-table").then(m => ({ default: m.DataTablePage })))
const ModalsPage = React.lazy(() => import("./pages/components/modals").then(m => ({ default: m.ModalsPage })))
const NotificationsPage = React.lazy(() => import("./pages/components/notifications").then(m => ({ default: m.NotificationsPage })))
const FormsPage = React.lazy(() => import("./pages/components/forms").then(m => ({ default: m.FormsPage })))

const ProductsApp = React.lazy(() => import("./pages/apps/products").then(m => ({ default: m.ProductsApp })))
const UsersApp = React.lazy(() => import("./pages/apps/users").then(m => ({ default: m.UsersApp })))

const DocumentationPage = React.lazy(() => import("./pages/documentation").then(m => ({ default: m.DocumentationPage })))

// Auth pages
const LoginPage = React.lazy(() => import("./pages/auth/login").then(m => ({ default: m.LoginPage })))
const SignupPage = React.lazy(() => import("./pages/auth/signup").then(m => ({ default: m.SignupPage })))
const ForgotPasswordPage = React.lazy(() => import("./pages/auth/forgot-password").then(m => ({ default: m.ForgotPasswordPage })))

// A helper for wrapping lazy loaded components in suspense
const Suspended = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  }>
    {children}
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppShell />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Suspended><EcommerceDashboard /></Suspended>,
      },
      {
        path: "dashboard",
        children: [
          { index: true, element: <Navigate to="ecommerce" replace /> },
          { path: "ecommerce", element: <Suspended><EcommerceDashboard /></Suspended> },
        ]
      },
      {
        path: "components",
        children: [
          { path: "alerts", element: <Suspended><AlertsPage /></Suspended> },
          { path: "avatars", element: <Suspended><AvatarsPage /></Suspended> },
          { path: "badges", element: <Suspended><BadgesPage /></Suspended> },
          { path: "buttons", element: <Suspended><ButtonsPage /></Suspended> },
          { path: "cards", element: <Suspended><CardsPage /></Suspended> },
          { path: "empty-states", element: <Suspended><EmptyStatesPage /></Suspended> },
          { path: "progress", element: <Suspended><ProgressPage /></Suspended> },
          { path: "timelines", element: <Suspended><TimelinesPage /></Suspended> },
          { path: "typography", element: <Suspended><TypographyPage /></Suspended> },
          { path: "accordions", element: <Suspended><AccordionDemoPage /></Suspended> },
        ]
      },
      {
        path: "apps",
        children: [          { path: "products", element: <Suspended><ProductsApp /></Suspended> },
          { path: "users", element: <Suspended><UsersApp /></Suspended> },
        ]
      },
      { path: "forms", element: <Suspended><FormsPage /></Suspended> },
      { path: "modals", element: <Suspended><ModalsPage /></Suspended> },
      { path: "data-table", element: <Suspended><DataTablePage /></Suspended> },
      { path: "notifications", element: <Suspended><NotificationsPage /></Suspended> },
      { path: "pro-components", element: <Suspended><ProComponents /></Suspended> },
      { path: "documentation", element: <Suspended><DocumentationPage /></Suspended> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Suspended><LoginPage /></Suspended> },
      { path: "signup", element: <Suspended><SignupPage /></Suspended> },
      { path: "forgot-password", element: <Suspended><ForgotPasswordPage /></Suspended> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
