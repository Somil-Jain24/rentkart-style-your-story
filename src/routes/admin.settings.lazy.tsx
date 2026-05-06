import { createLazyFileRoute } from "@tanstack/react-router";
import { Save, X, RotateCcw, Lock, Bell, Sliders } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "Admin Ops",
    email: "ops@rentkart.in",
    phone: "+91 9876543210",
    currentPassword: "",
    newPassword: "",
    twoFactorEnabled: true,
    loginAlertsEnabled: true,
    rentalCommission: "10",
    taxPercentage: "18",
    currency: "INR",
    region: "India",
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    if (target.type === "checkbox") {
      const checkboxTarget = target as HTMLInputElement;
      setFormData({
        ...formData,
        [target.name]: checkboxTarget.checked,
      });
    } else {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-4xl mx-auto">
        <AdminPageHeader
          title="Settings"
          subtitle="Manage your admin account and platform preferences"
        />

        <form className="space-y-8">
          {/* Admin Profile Section */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Admin Profile</h2>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground">Profile Photo</label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-saffron-soft text-lg font-bold text-primary-deep flex items-center justify-center">
                    OP
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors"
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Security Settings Section */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Security Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter new password"
                  />
                </div>
              </div>

              {/* Toggle Switches */}
              <div className="space-y-4 mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Require 2FA for all admin logins
                    </p>
                  </div>
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="twoFactorEnabled"
                      checked={formData.twoFactorEnabled}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-border peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Login Alerts</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Get notified of new login attempts
                    </p>
                  </div>
                  <label className="relative flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="loginAlertsEnabled"
                      checked={formData.loginAlertsEnabled}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-border peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Settings Section */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Sliders className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Platform Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Rental Commission (%)
                  </label>
                  <input
                    type="number"
                    name="rentalCommission"
                    value={formData.rentalCommission}
                    onChange={handleChange}
                    step="0.1"
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Tax (%)
                  </label>
                  <input
                    type="number"
                    name="taxPercentage"
                    value={formData.taxPercentage}
                    onChange={handleChange}
                    step="0.1"
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">Currency</label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>INR</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Region</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>India</option>
                    <option>Global</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Email Alerts</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Receive important updates via email
                  </p>
                </div>
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="emailAlerts"
                    checked={formData.emailAlerts}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-border peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">SMS Alerts</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Get urgent alerts via SMS
                  </p>
                </div>
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsAlerts"
                    checked={formData.smsAlerts}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-border peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Push Notifications</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Real-time notifications in browser
                  </p>
                </div>
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="pushNotifications"
                    checked={formData.pushNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-border peer-checked:bg-primary rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Sticky Save Bar */}
          <div className="sticky bottom-0 left-0 right-0 bg-background border-t border-border p-4 flex gap-3 justify-end">
            <button
              type="reset"
              className="px-6 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-deep transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
