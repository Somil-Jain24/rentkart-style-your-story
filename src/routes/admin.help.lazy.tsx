import { createLazyFileRoute } from "@tanstack/react-router";
import { ChevronDown, MessageSquare, BookOpen, AlertCircle, FileText, HelpCircle } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/help")({
  component: HelpSupportPage,
});

interface Ticket {
  id: string;
  userId: string;
  category: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in-progress" | "resolved";
  lastUpdated: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface DocCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

function HelpSupportPage() {
  const [tickets] = useState<Ticket[]>([
    {
      id: "TK-001",
      userId: "User123",
      category: "Payment Issue",
      priority: "high",
      status: "open",
      lastUpdated: "2 hours ago",
    },
    {
      id: "TK-002",
      userId: "User456",
      category: "Refund Query",
      priority: "medium",
      status: "in-progress",
      lastUpdated: "30 minutes ago",
    },
    {
      id: "TK-003",
      userId: "User789",
      category: "Seller Onboarding",
      priority: "low",
      status: "resolved",
      lastUpdated: "1 day ago",
    },
    {
      id: "TK-004",
      userId: "User012",
      category: "KYC Help",
      priority: "high",
      status: "open",
      lastUpdated: "3 hours ago",
    },
  ]);

  const [expandedFAQ, setExpandedFAQ] = useState<string | null>("payments-1");

  const faqCategories = {
    Payments: [
      {
        question: "How do I process a refund?",
        answer: "To process a refund, navigate to the Disputes section, select the case, review the evidence, and click 'Refund Buyer' to initiate the return.",
      },
      {
        question: "What payment methods do we support?",
        answer: "We support UPI, credit cards, debit cards, net banking, and digital wallets for buyer payments and bank transfers for seller payouts.",
      },
    ],
    Refunds: [
      {
        question: "What is the refund policy?",
        answer: "Refunds are processed within 5-7 business days. Disputes must be raised within 5 days of order completion.",
      },
      {
        question: "How do I handle a disputed refund?",
        answer: "Access the Disputes page, review all evidence, check the risk analysis, and make a decision based on platform policies.",
      },
    ],
    "Seller Onboarding": [
      {
        question: "What documents are required for seller registration?",
        answer: "Sellers need Aadhaar, PAN, bank account verification, and GST registration (if applicable). Review the KYC section for details.",
      },
      {
        question: "How long does KYC verification take?",
        answer: "Typically 24-48 hours. You can expedite by reviewing in the KYC Review section.",
      },
    ],
    "KYC Help": [
      {
        question: "What should I do if documents don't match?",
        answer: "If there's a mismatch, request re-upload from the KYC Review page. Use the risk analysis panel to identify issues.",
      },
      {
        question: "How do I handle suspicious accounts?",
        answer: "The risk analysis panel flags suspicious activity. You can reject verification or escalate to the security team.",
      },
    ],
  };

  const documentation: DocCard[] = [
    {
      icon: BookOpen,
      title: "Admin Guides",
      description: "Comprehensive guides for managing the platform",
      link: "#",
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Technical API reference and integration guides",
      link: "#",
    },
    {
      icon: AlertCircle,
      title: "Policies",
      description: "Platform policies and compliance guidelines",
      link: "#",
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="Help & Support"
          subtitle="Premium support center dashboard"
        />

        {/* Support Tickets */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden mb-8">
          <div className="border-b border-border p-6">
            <h2 className="font-display text-lg font-semibold">Support Tickets</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-alt">
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Ticket ID
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    User
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-border hover:bg-surface-alt transition-colors">
                    <td className="px-6 py-4 font-mono font-semibold text-foreground">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 text-foreground">{ticket.userId}</td>
                    <td className="px-6 py-4 text-foreground">{ticket.category}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          ticket.priority === "high"
                            ? "bg-red-100 text-red-700"
                            : ticket.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge
                        status={
                          ticket.status === "open"
                            ? "open"
                            : ticket.status === "in-progress"
                            ? "under-review"
                            : "resolved"
                        }
                      >
                        {ticket.status === "in-progress"
                          ? "In Progress"
                          : ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">
                      {ticket.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* FAQ Section */}
          <div>
            <h2 className="font-display text-lg font-semibold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-3">
              {Object.entries(faqCategories).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{category}</h3>
                  {items.map((item, idx) => {
                    const id = `${category.toLowerCase().replace(" ", "-")}-${idx + 1}`;
                    const isExpanded = expandedFAQ === id;

                    return (
                      <button
                        key={id}
                        onClick={() => setExpandedFAQ(isExpanded ? null : id)}
                        className="w-full text-left p-4 rounded-lg border border-border bg-card hover:bg-surface-alt transition-colors mb-2"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="font-medium text-foreground text-sm">{item.question}</p>
                          <ChevronDown
                            className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {isExpanded && (
                          <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Live Chat Section */}
          <div className="rounded-2xl border border-border bg-card p-6 h-fit">
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Support Chat
            </h3>

            <div className="bg-surface-alt rounded-lg p-4 mb-4 h-64 flex flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                <div className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600"></div>
                  <div className="bg-blue-100 rounded-lg p-2 text-xs max-w-xs">
                    <p>How can I help you today?</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Support - 2 min ago</p>
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <div className="bg-primary rounded-lg p-2 text-xs text-white max-w-xs">
                    <p>I need help with a refund dispute</p>
                    <p className="text-[10px] text-white/80 mt-1">You - Just now</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600"></div>
                  <div className="bg-blue-100 rounded-lg p-2 text-xs max-w-xs">
                    <p>I'll help you navigate the disputes section...</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Support - Now</p>
                  </div>
                </div>
              </div>

              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Average response time: 2-3 minutes
            </p>
          </div>
        </div>

        {/* Documentation Cards */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-6">Documentation</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {documentation.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <a
                  key={idx}
                  href={doc.link}
                  className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary transition-all group"
                >
                  <Icon className="h-8 w-8 text-primary mb-3 group-hover:text-primary-deep transition-colors" />
                  <h3 className="font-semibold text-foreground text-lg">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{doc.description}</p>
                  <p className="text-xs text-primary font-semibold mt-4 group-hover:text-primary-deep">
                    Open →
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
