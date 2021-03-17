module.exports = async (client) => {//youtube/Mefe King
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("k!yardım","yapımcım Mefe King", { //Oynuyor Kısmı
    type: "WATCHING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};