export const redeployVercel = async () => {
  const vercelToken = process.env.NEXT_PUBLIC_VERCEL_TOKEN; // Put your personal Vercel token here
  const projectId = "prj_ZUrm4zNXupaHoCdvOXkujvhmvOYS"; // Your Vercel project ID

  try {
    const response = await fetch(
      `https://api.vercel.com/v9/projects/${projectId}/deployments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const redeployResult = await response.json();
    console.log("Vercel redeploy result:", redeployResult);
  } catch (error) {
    console.error("Error triggering Vercel redeployment:", error);
  }
};
