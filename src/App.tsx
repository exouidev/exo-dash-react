import { Routes, Route } from "react-router-dom"
import { AppShell } from "./components/layout/app-shell"
import { EcommerceDashboard } from "./pages/dashboard/ecommerce"

import { AuthLayout } from "./components/layout/auth-layout"
import { LoginPage } from "./pages/auth/login"
import { SignupPage } from "./pages/auth/signup"
import { ForgotPasswordPage } from "./pages/auth/forgot-password"

import { AlertsPage } from "./pages/components/alerts"
import { AvatarsPage } from "./pages/components/avatars"
import { BadgesPage } from "./pages/components/badges"
import { ButtonsPage } from "./pages/components/buttons"
import { CardsPage } from "./pages/components/cards"
import { EmptyStatesPage } from "./pages/components/empty-states"
import { ProgressPage } from "./pages/components/progress"
import { TimelinesPage } from "./pages/components/timelines"
import { TypographyPage } from "./pages/components/typography"

import { DataTablePage } from "./pages/components/data-table"
import { ModalsPage } from "./pages/components/modals"
import { NotificationsPage } from "./pages/components/notifications"

import { DocumentationPage } from "./pages/documentation"

import { FormsPage } from "./pages/components/forms"

import { AccordionDemoPage } from "./pages/components/accordion-demo"
import { ProductsApp } from "./pages/apps/products"
import { UsersApp } from "./pages/apps/users"





function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<EcommerceDashboard />} />        <Route path="dashboard/ecommerce" element={<EcommerceDashboard />} />        <Route path="components/alerts" element={<AlertsPage />} />
        <Route path="components/avatars" element={<AvatarsPage />} />
        <Route path="components/badges" element={<BadgesPage />} />
        <Route path="components/buttons" element={<ButtonsPage />} />
        <Route path="components/cards" element={<CardsPage />} />
        <Route path="components/empty-states" element={<EmptyStatesPage />} />
        <Route path="components/progress" element={<ProgressPage />} />
        <Route path="components/timelines" element={<TimelinesPage />} />
        <Route path="components/typography" element={<TypographyPage />} />
        <Route path="components/accordions" element={<AccordionDemoPage />} />        <Route path="apps/products" element={<ProductsApp />} />
        <Route path="apps/users" element={<UsersApp />} />
        <Route path="forms" element={<FormsPage />} />
        <Route path="modals" element={<ModalsPage />} />
        <Route path="data-table" element={<DataTablePage />} />
        <Route path="notifications" element={<NotificationsPage />} />        <Route path="documentation" element={<DocumentationPage />} />





      </Route>
    
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  )
}

export default App
