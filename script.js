/**
 * Master Launchpad Configuration
 */
const CONFIG_URLS = {
  tool1: "https://ecom-ai-copy-studio.vercel.app",
  tool2: "https://ai-seo-schema-generator.vercel.app",
  tool3: "https://ai-cold-email-generator-orcin.vercel.app",
  tool4: "https://legalcraft-ai-policy-generator.vercel.app",
  tool5: "https://ai-social-content-studio-jade.vercel.app",
  tool6: "https://ai-brand-growth-engine.vercel.app",
  tool7: "https://fincraft-emi-roi-calculator.vercel.app",
  tool8: "https://ai-ecom-seo-metacraft.vercel.app",
  tool9: "https://ai-tagcraft-studio.vercel.app"
};

function launchTool(toolKey) {
  const targetUrl = CONFIG_URLS[toolKey];
  if (targetUrl && targetUrl.trim() !== "") {
    window.open(targetUrl, '_blank');
  } else {
    alert("This tool URL is currently being updated. Please try again shortly.");
  }
}
