// لو انت في fan.html أو admin.html، نحاول قراءة البيانات من localStorage
document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname;

  if (page.includes("fan.html")) {
    document.getElementById("todayStatus").textContent = localStorage.getItem("status") || "لا يوجد تحديث";
    document.getElementById("nextMatch").textContent = localStorage.getItem("nextMatch") || "لم يتم تحديدها";
  }

  if (page.includes("admin.html")) {
    showPlayerList();

    const savedFormation = localStorage.getItem("formation");
    if (savedFormation) document.getElementById("formationInput").value = savedFormation;

    const savedMatchHistory = localStorage.getItem("history");
    if (savedMatchHistory) document.getElementById("matchHistory").value = savedMatchHistory;
  }
});

// إضافة لاعب
function addPlayer() {
  const name = document.getElementById("playerName").value;
  const pos = document.getElementById("playerPosition").value;
  if (!name || !pos) return alert("أدخل الاسم والمركز");
  const player = ${name} (${pos});
  let players = JSON.parse(localStorage.getItem("players") || "[]");
  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));
  showPlayerList();
  document.getElementById("playerName").value = "";
  document.getElementById("playerPosition").value = "";
}

// عرض اللاعبين
function showPlayerList() {
  const list = document.getElementById("playerList");
  if (!list) return;
  list.innerHTML = "";
  const players = JSON.parse(localStorage.getItem("players") || "[]");
  players.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = p;
    li.onclick = () => {
      if (confirm("هل تريد حذف هذا اللاعب؟")) {
        players.splice(i, 1);
        localStorage.setItem("players", JSON.stringify(players));
        showPlayerList();
      }
    };
    list.appendChild(li);
  });
}

// حفظ التشكيلة
function saveFormation() {
  const f = document.getElementById("formationInput").value;
  localStorage.setItem("formation", f);
  alert("تم حفظ التشكيلة ✅");
}

// حفظ حالة اليوم
function saveStatus() {
  const s = document.getElementById("statusSelect").value;
  localStorage.setItem("status", s);
  alert("تم تحديث الحالة ✅");
}

// حفظ موعد المباراة القادمة
function saveNextMatch() {
  const n = document.getElementById("nextMatchInput").value;
  localStorage.setItem("nextMatch", n);
  alert("تم تحديد المباراة القادمة ✅");
}

// إرسال إشعار (تنبيه بسيط داخل الصفحة)
function sendNotification() {
  const msg = document.getElementById("notificationMsg").value;
  if (!msg) return alert("أدخل رسالة الإشعار");
  alert("📢 إشعار: " + msg);
}

// حفظ نتائج المباريات
function saveMatchHistory() {
  const history = document.getElementById("matchHistory").value;
  localStorage.setItem("history", history);
  alert("تم حفظ السجل ✅");
}

// إعادة ضبط كل البيانات
function resetData() {
  if (confirm("هل أنت متأكد من حذف جميع البيانات؟")) {
    localStorage.clear();
    alert("تم حذف جميع البيانات");
    location.reload();
  }
}
