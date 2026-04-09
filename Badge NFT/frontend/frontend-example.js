async function rewardUser(walletAddress, level) {
  const res = await fetch("http://localhost:3000/mint-badge", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      walletAddress,
      level,
      completedTask: true
    })
  });

  const data = await res.json();
  console.log(data);
}
