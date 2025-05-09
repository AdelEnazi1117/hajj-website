// Loading Animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1500);
});

// Scroll Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
    
    // Show/Hide Scroll to Top Button
    if (winScroll > 300) {
        document.getElementById("scrollToTop").style.display = "flex";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
    
    // Active Navigation Link
    let scrollPosition = window.scrollY + 100;
    document.querySelectorAll('section[data-section]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Scroll to Top
document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    
    const icon = this.querySelector('i');
    if (document.body.classList.contains("light-mode")) {
        icon.className = "fas fa-sun";
    } else {
        icon.className = "fas fa-moon";
    }
    
    // Show toast notification
    showToast("تم تغيير وضع العرض");
});

// Toggle FAQ
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector("i");
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.className = "fas fa-chevron-down";
    } else {
        answer.style.display = "block";
        icon.className = "fas fa-chevron-up";
    }
}

// Show Toast Function
function showToast(message) {
    const toast = document.getElementById("toast");
    document.getElementById("toastMessage").textContent = message;
    toast.style.display = "block";
    
    setTimeout(function() {
        toast.style.display = "none";
    }, 3000);
}

// Random Hajj Info
const hajjInfo = [
    "الحج هو الركن الخامس من أركان الإسلام، وهو فرض على كل مسلم بالغ عاقل مستطيع مرة واحدة في العمر.",
    "قال رسول الله ﷺ: \"من حج فلم يرفث ولم يفسق رجع كيوم ولدته أمه\".",
    "يعتبر الوقوف بعرفة هو ركن الحج الأعظم، ومن فاته الوقوف بعرفة فقد فاته الحج.",
    "في العام 2019، بلغ عدد الحجاج أكثر من 2.5 مليون شخص من جميع أنحاء العالم.",
    "تبلغ مساحة المسجد الحرام حوالي 356,800 متر مربع، ويمكنه استيعاب أكثر من مليوني مصلٍ.",
    "الكعبة المشرفة هي مركز الطواف، وهي مبنية على قواعد وضعها النبي إبراهيم عليه السلام وابنه إسماعيل.",
    "جمرة العقبة الكبرى هي الجمرة الأقرب إلى مكة المكرمة، وهي التي يرميها الحجاج يوم النحر.",
    "يعد الحجر الأسود من الجنة، وكان أبيض اللون لكنه اسود من خطايا بني آدم كما ورد في الأحاديث.",
    "الحج يكفر الذنوب والخطايا، وهو من أفضل الأعمال عند الله تعالى.",
    "لا يجوز للحاج المحرم قص شعره أو أظافره أو ارتداء الملابس المخيطة (للرجال) أو استخدام الطيب.",
    "طواف الإفاضة هو أحد أركان الحج الذي لا يصح الحج بدونه.",
    "من فضائل الحج أنه يعدل الجهاد في سبيل الله للمرأة وكبير السن.",
    "تم توسعة المسجد الحرام عدة مرات على مر التاريخ، وآخر توسعة أضافت مساحات شاسعة للمطاف والمصلين.",
    "لا يصح الحج إلا في أشهر الحج وهي: شوال وذو القعدة وعشر ذي الحجة.",
    "دعاء يوم عرفة مستجاب، وخير الدعاء دعاء يوم عرفة.",
    "رمي الجمرات يكون بحصى صغيرة، حجم الحمص تقريباً، ولا يجوز رميها بأحجار كبيرة.",
    "ذكر النبي محمد ﷺ أن الحج المبرور ليس له جزاء إلا الجنة."
];

document.getElementById("infoButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * hajjInfo.length);
    document.getElementById("randomInfo").textContent = hajjInfo[randomIndex];
    document.getElementById("infoContent").style.display = "block";
    
    // أنيميشن ظهور المعلومة
    document.getElementById("infoContent").style.animation = "none";
    setTimeout(() => {
        document.getElementById("infoContent").style.animation = "fadeIn 0.5s ease";
    }, 10);
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    showToast("تم استلام رسالتك بنجاح! سنتواصل معك قريباً.");
    this.reset();
});

// Show More FAQ
document.getElementById("showMoreFaqBtn").addEventListener("click", function() {
    showToast("جاري تحميل المزيد من الأسئلة الشائعة...");
    
    // هنا يمكن إضافة المزيد من الأسئلة الشائعة
    setTimeout(() => {
        showToast("تم تحميل جميع الأسئلة المتاحة");
    }, 2000);
});

// Download Manasik Button
document.getElementById("downloadManasikBtn").addEventListener("click", function() {
    showToast("جاري تحميل دليل المناسك، يرجى الانتظار...");
    
    // محاكاة التحميل
    setTimeout(() => {
        showToast("تم تحميل دليل المناسك بنجاح");
    }, 2000);
});

// Prayer Times Search
document.getElementById("searchPrayerBtn").addEventListener("click", function() {
    const month = document.getElementById("prayerMonth").value;
    const day = document.getElementById("prayerDay").value;
    const year = document.getElementById("prayerYear").value;
    
    showToast(`جاري البحث عن مواقيت الصلاة ليوم ${day}/${month}/${year}هـ`);
    
    // هنا يمكن إضافة كود للبحث عن المواقيت
    setTimeout(() => {
        showToast("تم تحديث مواقيت الصلاة");
    }, 1500);
});

// Countdown Timer
function updateCountdown() {
    const hajjDate = new Date("June 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = hajjDate - now;
    
    if (diff > 0) {
        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Navigation Links Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Items Click Event
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imageSrc = this.querySelector('img').getAttribute('src');
        const caption = this.querySelector('.gallery-caption').textContent;
        
        // هنا يمكن إضافة كود لعرض الصورة بشكل مكبر في نافذة منبثقة
        showToast("تم النقر على صورة: " + caption);
    });
});