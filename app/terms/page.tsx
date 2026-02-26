import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { OWNER_NAME, AI_NAME } from "@/config";

export default function Terms() {
    return (
        <div className="w-full flex justify-center p-10">
            <div className="w-full max-w-screen-md space-y-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground underline transition-colors"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to {AI_NAME}
                </Link>
                <h1 className="text-3xl font-bold">{AI_NAME}</h1>
                <h2 className="text-2xl font-semibold">Terms of Use / Disclaimer</h2>

                <p className="text-muted-foreground">
                    The following terms of use govern access to and use of the {AI_NAME}{" "}
                    Assistant (&quot;AI Chatbot&quot;), an artificial intelligence tool provided by{" "}
                    {OWNER_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By engaging with the AI
                    Chatbot, you agree to these terms. If you do not agree, you may not
                    use the AI Chatbot.
                </p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">General Information</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Provider and Purpose:</span> The
                            AI Chatbot is a tool developed and maintained by {OWNER_NAME}. It
                            is intended solely to assist users with questions about {OWNER_NAME}{" "}
                            products, including coolers, drinkware, bags, and outdoor gear.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Third-Party Involvement:</span>{" "}
                            The AI Chatbot utilizes multiple third-party platforms and
                            vendors, some of which operate outside the United States. Your
                            inputs may be transmitted, processed, and stored by these
                            third-party systems. As such, confidentiality, security, and privacy
                            cannot be guaranteed.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">No Guarantee of Accuracy:</span>{" "}
                            The AI Chatbot is designed to provide helpful and relevant
                            responses but may deliver inaccurate, incomplete, or outdated
                            information. Users are strongly encouraged to verify product details,
                            pricing, and availability on yeti.com before making purchasing decisions.
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liability</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Use at Your Own Risk:</span> The
                            AI Chatbot is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. To
                            the fullest extent permitted by law:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>
                                    {OWNER_NAME} disclaims all warranties, express or implied,
                                    including but not limited to warranties of merchantability,
                                    fitness for a particular purpose, and non-infringement.
                                </li>
                                <li>
                                    {OWNER_NAME} is not liable for any errors, inaccuracies, or
                                    omissions in the information provided by the AI Chatbot.
                                </li>
                            </ul>
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">
                                No Responsibility for Damages:
                            </span>{" "}
                            Under no circumstances shall {OWNER_NAME}, its collaborators,
                            partners, affiliated entities, or representatives be liable for
                            any direct, indirect, incidental, consequential, special, or
                            punitive damages arising out of or in connection with the use of
                            the AI Chatbot.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">
                                Modification or Discontinuation:
                            </span>{" "}
                            We reserve the right to modify, suspend, or discontinue the AI
                            Chatbot&apos;s functionalities at any time without notice.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Future Fees:</span> While the AI
                            Chatbot is currently provided free of charge, we reserve the right
                            to implement a fee for its use at any time.
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">User Responsibilities</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Eligibility:</span> Use of the AI
                            Chatbot is restricted to individuals aged 18 or older.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Prohibited Conduct:</span> By
                            using the AI Chatbot, you agree not to:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>Post or transmit content that is defamatory, offensive, intimidating, illegal, racist, discriminatory, obscene, or otherwise inappropriate.</li>
                                <li>Use the AI Chatbot to engage in unlawful or unethical activities.</li>
                                <li>Attempt to compromise the security or functionality of the AI Chatbot.</li>
                                <li>Copy, distribute, modify, reverse engineer, decompile, or extract the source code of the AI Chatbot without explicit written consent.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Data Privacy and Security</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">No Privacy Guarantee:</span> The
                            AI Chatbot does not guarantee privacy, confidentiality, or
                            security of the information you provide. Conversations may be
                            reviewed by {OWNER_NAME} or affiliated entities for purposes such
                            as improving the AI Chatbot and product recommendations.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Public Information:</span> Any
                            information you provide through the AI Chatbot is treated as
                            public.
                        </li>
                        <li className="text-muted-foreground">
                            <span className="font-semibold text-foreground">Data Transmission:</span> Inputs
                            may be transmitted to and processed by third-party services.
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Acceptance of Terms</h3>
                    <p className="text-muted-foreground">
                        By using the AI Chatbot, you confirm that you have read, understood,
                        and agreed to these Terms of Use and Disclaimer. If you do not
                        agree with any part of these terms, you may not use the AI Chatbot.
                    </p>
                </div>

                <div className="mt-8 text-sm text-muted-foreground/60">
                    <p>Last Updated: February 25, 2026</p>
                </div>
            </div>
        </div>
    );
}