"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, Save, Camera, Image as ImageIcon, User as UserIcon, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/auth-context";
import { CATEGORY_OPTIONS } from "@/lib/categories";
import { SITE_CONFIG, type TaskKey } from "@/lib/site-config";
import { addLocalPost } from "@/lib/local-posts";

type Field = {
  key: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "url"
    | "number"
    | "tags"
    | "images"
    | "highlights"
    | "category"
    | "file";
  placeholder?: string;
  required?: boolean;
};

const FORM_CONFIG: Record<TaskKey, { title: string; description: string; fields: Field[] }> = {
  listing: {
    title: "Create Business Listing",
    description: "Add a local-only listing with business details.",
    fields: [
      { key: "title", label: "Listing title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Full description", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "location", label: "Location", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "email", label: "Business email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "logo", label: "Logo URL", type: "url" },
      { key: "images", label: "Gallery images", type: "images" },
      { key: "highlights", label: "Highlights", type: "highlights" },
    ],
  },
  classified: {
    title: "Create Classified",
    description: "Add a local-only classified ad.",
    fields: [
      { key: "title", label: "Ad title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Ad details", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "location", label: "Location", type: "text" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "email", label: "Business email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "images", label: "Images", type: "images" },
      { key: "highlights", label: "Highlights", type: "highlights" },
    ],
  },
  article: {
    title: "Create Article",
    description: "Write a local-only article post.",
    fields: [
      { key: "title", label: "Article title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Article content (HTML allowed)", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "images", label: "Cover images", type: "images" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  image: {
    title: "Create Image Share",
    description: "Share image-only content locally.",
    fields: [
      { key: "title", label: "Image title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Caption", type: "textarea" },
      { key: "category", label: "Category", type: "category" },
      { key: "images", label: "Images", type: "images", required: true },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  profile: {
    title: "Create Profile",
    description: "Create a local-only business profile.",
    fields: [
      { key: "brandName", label: "Brand name", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "About the brand", type: "textarea" },
      { key: "website", label: "Website URL", type: "url", required: true },
      { key: "logo", label: "Logo URL", type: "url", required: true },
    ],
  },
  social: {
    title: "Create Social Post",
    description: "Publish a local-only social update.",
    fields: [
      { key: "title", label: "Post title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Post content", type: "textarea", required: true },
      { key: "category", label: "Category", type: "category" },
      { key: "images", label: "Images", type: "images" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  sbm: {
    title: "Create Bookmark",
    description: "Submit a local-only social bookmark.",
    fields: [
      { key: "title", label: "Bookmark title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Why it’s useful", type: "textarea" },
      { key: "website", label: "Target URL", type: "url", required: true },
      { key: "category", label: "Category", type: "category" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
  },
  pdf: {
    title: "Create PDF Entry",
    description: "Add a local-only PDF resource.",
    fields: [
      { key: "title", label: "PDF title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Description", type: "textarea" },
      { key: "fileUrl", label: "PDF file URL", type: "file", required: true },
      { key: "category", label: "Category", type: "category", required: true },
      { key: "images", label: "Cover image", type: "images" },
    ],
  },
  org: {
    title: "Create Organization",
    description: "Create a local-only organization profile.",
    fields: [
      { key: "brandName", label: "Organization name", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "About the organization", type: "textarea" },
      { key: "website", label: "Website URL", type: "url" },
      { key: "logo", label: "Logo URL", type: "url" },
    ],
  },
  comment: {
    title: "Create Blog Comment",
    description: "Store a local-only blog comment entry.",
    fields: [
      { key: "title", label: "Comment title", type: "text", required: true },
      { key: "summary", label: "Short summary", type: "textarea", required: true },
      { key: "description", label: "Comment body", type: "textarea", required: true },
      { key: "website", label: "Target post URL", type: "url", required: true },
      { key: "category", label: "Category", type: "category" },
    ],
  },
};

export default function CreateTaskPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const taskKey = params?.task as TaskKey;

  const taskConfig = useMemo(
    () => SITE_CONFIG.tasks.find((task) => task.key === taskKey && task.enabled),
    [taskKey]
  );
  const formConfig = FORM_CONFIG[taskKey];

  const [values, setValues] = useState<Record<string, string>>({});
  const [uploadingPdf, setUploadingPdf] = useState(false);

  if (!taskConfig || !formConfig) {
    return (
      <div className="min-h-screen bg-[#fffaf2]">
        <NavbarShell />
        <main className="mx-auto max-w-2xl px-4 py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-slate-900">Task not available</h1>
          <p className="mt-3 text-slate-600">
            This task is not enabled for the current site. Try creating an image gallery or creator profile instead.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/create/image" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90">
              Submit an Image <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/create/profile" className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50">
              Create a Profile
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const taskMeta: Record<string, { eyebrow: string; title: string; highlight: string; tagline: string; icon: any; tips: string[] }> = {
    image: {
      eyebrow: "Submit your work",
      title: "Share your",
      highlight: "image story",
      tagline: "Upload a stunning image, add a caption, and publish it to the Pixelwebio gallery.",
      icon: ImageIcon,
      tips: [
        "Use high-quality images (at least 1600px wide).",
        "Add descriptive titles and tags for better discovery.",
        "Pick the right category to reach the right audience.",
      ],
    },
    profile: {
      eyebrow: "Become a creator",
      title: "Build your",
      highlight: "creator profile",
      tagline: "Set up a polished public profile so brands and clients can find and book you.",
      icon: UserIcon,
      tips: [
        "Use a clean, recognizable logo or avatar.",
        "Write a short summary that captures your style.",
        "Add a website link so visitors can dig deeper.",
      ],
    },
  };
  const meta = taskMeta[taskKey as string] || {
    eyebrow: "Create",
    title: formConfig.title,
    highlight: "",
    tagline: formConfig.description,
    icon: Camera,
    tips: ["Fill in required fields marked with *.", "You can always edit later.", "Your draft is saved locally in your browser."],
  };
  const Icon = meta.icon;

  const updateValue = (key: string, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in before creating content.",
      });
      router.push("/login");
      return;
    }

    const missing = formConfig.fields.filter((field) => field.required && !values[field.key]);
    if (missing.length) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields before saving.",
      });
      return;
    }

    const title = values.title || values.brandName || "Untitled";
    const summary = values.summary || "";
    const contentType = taskConfig.contentType || taskKey;

    const content: Record<string, unknown> = {
      type: contentType,
    };

    if (values.category) content.category = values.category;
    if (values.description) content.description = values.description;
    if (values.website) content.website = values.website;
    if (values.email) content.email = values.email;
    if (values.phone) content.phone = values.phone;
    if (values.address) content.address = values.address;
    if (values.location) content.location = values.location;
    if (values.logo) content.logo = values.logo;
    if (values.fileUrl) content.fileUrl = values.fileUrl;
    if (values.brandName) content.brandName = values.brandName;

    const highlights = values.highlights
      ? values.highlights.split(",").map((item) => item.trim()).filter(Boolean)
      : [];
    if (highlights.length) content.highlights = highlights;

    const tags = values.tags
      ? values.tags.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    const images = values.images
      ? values.images.split(",").map((item) => item.trim()).filter(Boolean)
      : [];

    const post = addLocalPost({
      task: taskKey,
      title,
      summary,
      authorName: user.name,
      tags,
      content,
      media: images.map((url) => ({ url, type: "IMAGE" })),
      publishedAt: new Date().toISOString(),
    });

    toast({
      title: "Saved locally",
      description: "This post is stored only in your browser.",
    });

    router.push(`/local/${taskKey}/${post.slug}`);
  };

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <NavbarShell />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <Link
              href={taskConfig.route}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-amber-600"
            >
              <ArrowLeft className="h-4 w-4" /> Back to {taskConfig.label}
            </Link>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">{meta.eyebrow}</p>
                <h1 className="mt-1 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  {meta.title} {meta.highlight ? <span className="text-amber-500">{meta.highlight}</span> : null}
                </h1>
                <p className="mt-3 max-w-2xl text-base text-slate-600">{meta.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:items-start">
            {/* FORM CARD */}
            <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-2 border-b border-amber-100 pb-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  <Icon className="h-3 w-3" /> {taskConfig.label}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  Saved in your browser
                </span>
              </div>

              <div className="mt-6 grid gap-5">
                {formConfig.fields.map((field) => (
                  <div key={field.key} className="grid gap-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {field.label} {field.required ? <span className="text-amber-500">*</span> : null}
                    </Label>
                    {field.type === "textarea" ? (
                      <Textarea
                        rows={4}
                        placeholder={field.placeholder}
                        value={values[field.key] || ""}
                        onChange={(event) => updateValue(field.key, event.target.value)}
                        className="rounded-xl border border-slate-200 bg-slate-50 focus-visible:border-amber-400 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-amber-200"
                      />
                    ) : field.type === "category" ? (
                      <select
                        value={values[field.key] || ""}
                        onChange={(event) => updateValue(field.key, event.target.value)}
                        className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200"
                      >
                        <option value="">Select category</option>
                        {CATEGORY_OPTIONS.map((option) => (
                          <option key={option.slug} value={option.slug}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "file" ? (
                      <div className="grid gap-3 rounded-xl border-2 border-dashed border-amber-200 bg-amber-50/40 p-4">
                        <Input
                          type="file"
                          accept="application/pdf"
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (!file) return;
                            if (file.type !== "application/pdf") {
                              toast({
                                title: "Invalid file",
                                description: "Please upload a PDF file.",
                              });
                              return;
                            }
                            const reader = new FileReader();
                            setUploadingPdf(true);
                            reader.onload = () => {
                              const result = typeof reader.result === "string" ? reader.result : "";
                              updateValue(field.key, result);
                              setUploadingPdf(false);
                              toast({
                                title: "PDF uploaded",
                                description: "File is stored locally.",
                              });
                            };
                            reader.readAsDataURL(file);
                          }}
                          className="bg-white"
                        />
                        <Input
                          type="text"
                          placeholder="Or paste a PDF URL"
                          value={values[field.key] || ""}
                          onChange={(event) => updateValue(field.key, event.target.value)}
                          className="h-11 rounded-xl border border-slate-200 bg-white"
                        />
                        {uploadingPdf ? (
                          <p className="text-xs font-semibold text-amber-600">Uploading PDF…</p>
                        ) : null}
                      </div>
                    ) : (
                      <Input
                        type={field.type === "number" ? "number" : "text"}
                        placeholder={
                          field.type === "images" || field.type === "tags" || field.type === "highlights"
                            ? "Separate values with commas"
                            : field.placeholder
                        }
                        value={values[field.key] || ""}
                        onChange={(event) => updateValue(field.key, event.target.value)}
                        className="h-12 rounded-xl border border-slate-200 bg-slate-50 focus-visible:border-amber-400 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-amber-200"
                      />
                    )}
                    {(field.type === "images" || field.type === "tags" || field.type === "highlights") ? (
                      <p className="text-xs text-slate-500">Separate multiple values with commas.</p>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-amber-100 pt-6">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
                >
                  <Save className="h-4 w-4" />
                  Publish
                </button>
                <Link
                  href={taskConfig.route}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50"
                >
                  View {taskConfig.label} <Plus className="h-4 w-4" />
                </Link>
                <p className="ml-auto text-xs text-slate-500">
                  Need help? <Link href="/help" className="font-bold text-amber-600 hover:underline">Visit support</Link>
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  <h3 className="font-black text-slate-900">Tips for success</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {meta.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      <span className="leading-6">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-6 text-white shadow-lg">
                <Camera className="h-6 w-6" />
                <h3 className="mt-3 text-lg font-black">Need inspiration?</h3>
                <p className="mt-2 text-sm text-white/90">
                  Browse top galleries and creator profiles to see what works on Pixelwebio.
                </p>
                <div className="mt-4 grid gap-2">
                  <Link href="/images" className="inline-flex items-center justify-between rounded-xl bg-white/15 px-4 py-2.5 text-sm font-bold backdrop-blur hover:bg-white/25">
                    Browse Gallery <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/profile" className="inline-flex items-center justify-between rounded-xl bg-white/15 px-4 py-2.5 text-sm font-bold backdrop-blur hover:bg-white/25">
                    Browse Creators <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
