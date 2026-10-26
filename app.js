// ===== БАЗА ДАННЫХ РАСТЕНИЙ =====
const plants = [
    {
        id: 1,
        name: "Монстера",
        emoji: "🌿",
        image: "images/Monstera_deliciosa.jpg",
        latin: "Monstera deliciosa",
        difficulty: "easy",
        petSafe: false,
        shortDesc: "Популярное тропическое растение с резными листьями",
        description: "Монстера — одно из самых популярных комнатных растений. Её большие резные листья создают тропическую атмосферу в любом интерьере. Растение быстро растёт и не требует сложного ухода.",
        light: "Яркий рассеянный свет",
        water: "Раз в 5-7 дней",
        humidity: "Высокая (60%+)",
        temperature: "18-27°C",
        tips: ["Протирайте листья от пыли", "Опора для роста", "Не переливайте"]
    },
    {
        id: 2,
        name: "Сансевиерия",
        emoji: "🌵",
        image: "images/Sansevieria_trifasciata.jpg",
        latin: "Sansevieria trifasciata",
        difficulty: "easy",
        petSafe: false,
        shortDesc: "Неубиваемое растение, идеальное для новичков",
        description: "Сансевиерия (тёщин язык) — одно из самых неприхотливых комнатных растений. Отлично очищает воздух и может долго обходиться без полива. Идеально для занятых людей.",
        light: "Любой (от тени до солнца)",
        water: "Раз в 2-3 недели",
        humidity: "Любая",
        temperature: "15-30°C",
        tips: ["Редкий полив", "Хороший дренаж", "Пересадка раз в 2-3 года"]
    },
    {
        id: 3,
        name: "Фикус лировидный",
        emoji: "🌳",
        image: "images/Ficus_lyrata.jpg",
        latin: "Ficus lyrata",
        difficulty: "medium",
        petSafe: false,
        shortDesc: "Эффектное растение с крупными скрипичными листьями",
        description: "Фикус лировидный — стильное растение с большими листьями в форме скрипки. Требует стабильных условий и не любит перестановок. Станет настоящим украшением интерьера.",
        light: "Яркий рассеянный свет",
        water: "Раз в 5-7 дней",
        humidity: "Средняя (50%+)",
        temperature: "18-24°C",
        tips: ["Не переставляйте", "Опрыскивайте листья", "Избегайте сквозняков"]
    },
    {
        id: 4,
        name: "Спатифиллум",
        emoji: "🤍",
        image: "images/Spathiphyllum_wallisii.jpg",
        latin: "Spathiphyllum wallisii",
        difficulty: "easy",
        petSafe: false,
        shortDesc: "Цветущее растение, очищающее воздух",
        description: "Спатифиллум (женское счастье) — красивое цветущее растение с белыми покрывалами. Отлично очищает воздух от токсинов. Любит влажность и регулярный полив.",
        light: "Рассеянный свет, полутень",
        water: "Раз в 3-5 дней",
        humidity: "Высокая (60%+)",
        temperature: "18-25°C",
        tips: ["Опрыскивайте регулярно", "Удаляйте увядшие цветы", "Не допускайте пересыхания"]
    },
    {
        id: 5,
        name: "Калатея",
        emoji: "🍀",
        image: "images/Calathea_ornata.jpg",
        latin: "Calathea ornata",
        difficulty: "hard",
        petSafe: true,
        shortDesc: "Растение с потрясающими узорами на листьях",
        description: "Калатея — капризное, но невероятно красивое растение с декоративными листьями. Требует высокой влажности и стабильной температуры. Листья складываются на ночь.",
        light: "Рассеянный свет, без прямых лучей",
        water: "Раз в 3-4 дня",
        humidity: "Очень высокая (70%+)",
        temperature: "18-24°C",
        tips: ["Дистиллированная вода", "Высокая влажность", "Без сквозняков"]
    },
    {
        id: 6,
        name: "Хлорофитум",
        emoji: "🌿",
        image: "images/Chlorophytum_comosum.jpg",
        latin: "Chlorophytum comosum",
        difficulty: "easy",
        petSafe: true,
        shortDesc: "Неприхотливое растение-очиститель воздуха",
        description: "Хлорофитум — одно из лучших растений для очистки воздуха. Быстро растёт, легко размножается детками. Абсолютно безопасен для животных и детей.",
        light: "Яркий или рассеянный свет",
        water: "Раз в 5-7 дней",
        humidity: "Любая",
        temperature: "15-25°C",
        tips: ["Легко размножается", "Обрезайте сухие кончики", "Можно выращивать в гидропонике"]
    },
    {
        id: 7,
        name: "Алоэ вера",
        emoji: "🪴",
        image: "images/Aloe_vera.jpg",
        latin: "Aloe vera",
        difficulty: "easy",
        petSafe: false,
        shortDesc: "Лекарственное суккулентное растение",
        description: "Алоэ вера — полезное суккулентное растение с лекарственными свойствами. Гель из листьев используется для кожи. Очень неприхотливо и любит солнце.",
        light: "Прямой солнечный свет",
        water: "Раз в 2-3 недели",
        humidity: "Низкая",
        temperature: "15-30°C",
        tips: ["Хороший дренаж обязателен", "Не переливайте", "Можно использовать гель"]
    },
    {
        id: 8,
        name: "Папоротник Нефролепис",
        emoji: "🌿",
        image: "images/Nephrolepis_exaltata.jpg",
        latin: "Nephrolepis exaltata",
        difficulty: "medium",
        petSafe: true,
        shortDesc: "Пышный папоротник для влажных помещений",
        description: "Нефролепис — красивый пышный папоротник, который создаёт ощущение тропического леса. Любит высокую влажность и регулярное опрыскивание. Безопасен для животных.",
        light: "Рассеянный свет, полутень",
        water: "Раз в 2-3 дня",
        humidity: "Высокая (60%+)",
        temperature: "16-24°C",
        tips: ["Регулярное опрыскивание", "Не пересушивайте", "Удаляйте старые вайи"]
    },
    {
        id: 9,
        name: "Замиокулькас",
        emoji: "💚",
        image: "images/Zamioculcas_zamiifolia.jpg",
        latin: "Zamioculcas zamiifolia",
        difficulty: "easy",
        petSafe: false,
        shortDesc: "Долларовое дерево — стильное и неприхотливое",
        description: "Замиокулькас (долларовое дерево) — современное и стильное растение. Очень неприхотливо, может долго обходиться без полива. Глянцевые тёмно-зелёные листья выглядят эффектно.",
        light: "Рассеянный свет, переносит тень",
        water: "Раз в 2-3 недели",
        humidity: "Любая",
        temperature: "18-26°C",
        tips: ["Редкий полив", "Хороший дренаж", "Протирайте листья"]
    },
    {
        id: 10,
        name: "Калатея Медальон",
        emoji: "🟢",
        image: "images/Calathea_roseopicta.jpg",
        latin: "Calathea roseopicta",
        difficulty: "hard",
        petSafe: true,
        shortDesc: "Растение с круглыми листьями и розовыми узорами",
        description: "Калатея Медальон — потрясающее растение с округлыми листьями, украшенными розовыми и белыми узорами. Требовательна к влажности, но абсолютно безопасна для питомцев.",
        light: "Рассеянный свет",
        water: "Раз в 3-4 дня",
        humidity: "Очень высокая (70%+)",
        temperature: "18-24°C",
        tips: ["Только мягкая вода", "Высокая влажность", "Без прямых солнечных лучей"]
    }
];

// ===== СОВЕТЫ ПО УХОДУ =====
const careTips = [
    {
        icon: "💧",
        title: "Полив",
        text: "Большинство растений предпочитают, чтобы верхний слой почвы (2-3 см) подсох между поливами. Используйте отстоянную воду комнатной температуры. Лучше недолить, чем перелить — корни могут загнить."
    },
    {
        icon: "☀️",
        title: "Освещение",
        text: "Большинству комнатных растений нужен яркий рассеянный свет. Прямые солнечные лучи могут обжечь листья. Поворачивайте растение раз в неделю для равномерного роста."
    },
    {
        icon: "💦",
        title: "Влажность",
        text: "Тропические растения любят высокую влажность. Опрыскивайте листья, используйте увлажнитель или поставьте горшок на поддон с влажным керамзитом. Избегайте попадания воды на цветы."
    },
    {
        icon: "🌡️",
        title: "Температура",
        text: "Большинство комнатных растений комфортно чувствуют себя при 18-25°C. Избегайте резких перепадов температуры и холодных сквозняков. Зимой держите растения подальше от батарей."
    },
    {
        icon: "🧪",
        title: "Удобрение",
        text: "Подкармливайте растения в период активного роста (весна-лето) раз в 2-4 недели. Зимой удобрение обычно не нужно. Используйте удобрения, предназначенные для конкретного типа растений."
    },
    {
        icon: "🪴",
        title: "Пересадка",
        text: "Пересаживайте растения весной, когда корни начинают выглядывать из дренажных отверстий. Новый горшок должен быть на 2-3 см больше предыдущего. Используйте качественный грунт."
    },
    {
        icon: "✂️",
        title: "Обрезка",
        text: "Регулярно удаляйте сухие и пожелтевшие листья. Обрезка стимулирует рост новых побегов. Дезинфицируйте инструменты перед обрезкой. Лучшее время — весна."
    },
    {
        icon: "🐛",
        title: "Вредители",
        text: "Регулярно осматривайте растения на наличие вредителей: тля, паутинный клещ, щитовка. При обнаружении обработайте растение мыльным раствором или инсектицидом. Изолируйте заражённое растение."
    },
    {
        icon: "🤎",
        title: "Дренаж",
        text: "Хороший дренаж — залог здоровья корней. Убедитесь, что в горшке есть дренажные отверстия. Используйте керамзит или гальку на дне. Не оставляйте воду в поддоне надолго."
    }
];

// ===== localStorage УТИЛИТЫ =====
function getCollection() {
    return JSON.parse(localStorage.getItem('plantCollection') || '[]');
}

function saveCollection(collection) {
    localStorage.setItem('plantCollection', JSON.stringify(collection));
}

function getReminders() {
    return JSON.parse(localStorage.getItem('plantReminders') || '[]');
}

function saveReminders(reminders) {
    localStorage.setItem('plantReminders', JSON.stringify(reminders));
}

// ===== НАВИГАЦИЯ =====
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// ===== УВЕДОМЛЕНИЯ (TOAST) =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

// ===== РЕНДЕР СЕТКИ РАСТЕНИЙ =====
function renderPlantGrid(plantList) {
    const grid = document.getElementById('plantGrid');
    if (!grid) return;

    grid.innerHTML = plantList.map(plant => `
        <div class="plant-card" onclick="window.location.href='plant.html?id=${plant.id}'">
            <div class="plant-card-image">
                <img src="${plant.image}" alt="${plant.name}" class="plant-card-img">
            </div>
            <div class="plant-card-body">
                <h3>${plant.name}</h3>
                <div class="latin-name">${plant.latin}</div>
                <span class="difficulty difficulty-${plant.difficulty}">
                    ${plant.difficulty === 'easy' ? '🟢 Лёгкий' : plant.difficulty === 'medium' ? '🟡 Средний' : '🔴 Сложный'}
                </span>
                <p class="short-desc">${plant.shortDesc}</p>
            </div>
        </div>
    `).join('');
}

// ===== ФИЛЬТРАЦИЯ =====
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            let filtered = plants;

            if (filter === 'pet-safe') {
                filtered = plants.filter(p => p.petSafe);
            } else if (filter !== 'all') {
                filtered = plants.filter(p => p.difficulty === filter);
            }

            renderPlantGrid(filtered);
        });
    });
}

function filterPlants() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = plants.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.latin.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query)
    );
    renderPlantGrid(filtered);
}

// ===== ДЕТАЛЬНАЯ СТРАНИЦА РАСТЕНИЯ =====
function renderPlantDetail(id) {
    const container = document.getElementById('plantDetail');
    if (!container) return;

    const plant = plants.find(p => p.id === id);
    if (!plant) {
        container.innerHTML = '<h2>Растение не найдено</h2><a href="index.html" class="btn-back">← Назад к каталогу</a>';
        return;
    }

    const collection = getCollection();
    const isInCollection = collection.some(item => item.plantId === plant.id);

    container.innerHTML = `
        <div class="plant-detail-image">
            <img src="${plant.image}" alt="${plant.name}" class="plant-detail-img">
        </div>
        <div class="plant-detail-info">
            <a href="index.html" class="btn-back">← Назад к каталогу</a>
            <h1>${plant.name}</h1>
            <div class="latin">${plant.latin}</div>
            <span class="difficulty difficulty-${plant.difficulty}" style="margin-bottom:1rem; display:inline-block;">
                ${plant.difficulty === 'easy' ? '🟢 Лёгкий уход' : plant.difficulty === 'medium' ? '🟡 Средний уход' : '🔴 Сложный уход'}
            </span>
            ${plant.petSafe ? '<span style="background:#d4edda;color:#155724;padding:0.2rem 0.8rem;border-radius:50px;font-size:0.8rem;font-weight:600;margin-left:0.5rem;">🐾 Безопасно для животных</span>' : ''}
            <p class="description">${plant.description}</p>

            <div class="care-info">
                <div class="care-item">
                    <div class="icon">☀️</div>
                    <div class="label">☀️Освещение</div>
                    <div class="value">${plant.light}</div>
                </div>
                <div class="care-item">
                    <div class="icon">💧</div>
                    <div class="label">Полив</div>
                    <div class="value">${plant.water}</div>
                </div>
                <div class="care-item">
                    <div class="icon">💨</div>
                    <div class="label">Влажность</div>
                    <div class="value">${plant.humidity}</div>
                </div>
                <div class="care-item">
                    <div class="icon">🌡️</div>
                    <div class="label">Температура</div>
                    <div class="value">${plant.temperature}</div>
                </div>
            </div>

            <div style="margin-bottom:1.5rem;">
                <h3 style="color:var(--green-dark);margin-bottom:0.5rem;">💡 Советы:</h3>
                <ul style="padding-left:1.5rem;color:var(--text-light);">
                    ${plant.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>

            <button class="btn-add-collection ${isInCollection ? 'added' : ''}" onclick="toggleCollection(${plant.id})">
                ${isInCollection ? '✅ В коллекции' : ' Добавить в коллекцию'}
            </button>
        </div>
    `;
}

function toggleCollection(plantId) {
    const collection = getCollection();
    const isInCollection = collection.some(item => item.plantId === plantId);

    if (isInCollection) {
        // Если уже в коллекции — удаляем
        const index = collection.findIndex(item => item.plantId === plantId);
        const plantName = plants.find(p => p.id === plantId)?.name || 'Растение';
        collection.splice(index, 1);
        saveCollection(collection);
        renderPlantDetail(plantId);
        showToast(`${plantName} удалён из коллекции`);
    } else {
        openAddModal();
    }
}

// ===== СОВЕТЫ ПО УХОДУ =====
function renderCareTips() {
    const grid = document.getElementById('careGrid');
    if (!grid) return;

    grid.innerHTML = careTips.map(tip => `
        <div class="care-card">
            <div class="care-icon">${tip.icon}</div>
            <h3>${tip.title}</h3>
            <p>${tip.text}</p>
        </div>
    `).join('');
}

// ===== КОЛЛЕКЦИЯ =====
function renderCollection() {
    const grid = document.getElementById('collectionGrid');
    const emptyState = document.getElementById('emptyState');
    const countEl = document.getElementById('collectionCount');
    if (!grid) return;

    const collection = getCollection();

    if (countEl) {
        const word = getPlantWord(collection.length);
        countEl.textContent = `${collection.length} ${word}`;
    }

    if (collection.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = collection.map((item, index) => {
        const plant = plants.find(p => p.id === item.plantId);
        if (!plant) return '';
        return `
            <div class="plant-card">
                <div class="plant-card-image">
                    <img src="${plant.image}" alt="${plant.name}" class="plant-card-img">
                </div>
                <div class="plant-card-body">
                    <h3>${item.nickname || plant.name}</h3>
                    <div class="latin-name">${plant.latin}</div>
                    <p class="short-desc">📅 Добавлено: ${formatDate(item.dateAdded)}</p>
                    ${item.location ? `<p class="short-desc">📍 ${item.location}</p>` : ''}
                    <div style="margin-top:0.5rem;display:flex;gap:0.5rem;">
                        <a href="plant.html?id=${plant.id}" class="btn-primary" style="text-decoration:none;font-size:0.85rem;padding:0.4rem 0.8rem;">Подробнее</a>
                        <button class="btn-danger" onclick="removeFromCollection(${index})">Удалить</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function removeFromCollection(index) {
    const collection = getCollection();
    const plantName = plants.find(p => p.id === collection[index].plantId)?.name || 'Растение';
    collection.splice(index, 1);
    saveCollection(collection);
    renderCollection();
    showToast(`${plantName} удалён из коллекции`);
}

function populatePlantSelect() {
    const select = document.getElementById('addPlantSelect');
    if (!select) return;

    select.innerHTML = plants.map(p =>
        `<option value="${p.id}">${p.emoji} ${p.name}</option>`
    ).join('');
}

function openAddModal() {
    const modal = document.getElementById('addModal');
    if (modal) modal.classList.add('active');
}

function closeAddModal() {
    const modal = document.getElementById('addModal');
    if (modal) {
        modal.classList.remove('active');
        const form = document.getElementById('addPlantForm');
        if (form) form.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addPlantForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const plantId = parseInt(document.getElementById('addPlantSelect').value);
            const nickname = document.getElementById('addPlantNickname').value;
            const date = document.getElementById('addPlantDate').value;
            const location = document.getElementById('addPlantLocation').value;

            const collection = getCollection();

            if (collection.some(item => item.plantId === plantId)) {
                showToast('Это растение уже в коллекции!');
                return;
            }

            collection.push({
                plantId,
                nickname: nickname || plants.find(p => p.id === plantId).name,
                dateAdded: date || new Date().toISOString().split('T')[0],
                location
            });

            saveCollection(collection);
            closeAddModal();
            form.reset();
            renderCollection();
            showToast('Растение добавлено в коллекцию! 🌿');
        });
    }
});

// ===== НАПОМИНАНИЯ =====
function renderReminders() {
    const list = document.getElementById('remindersList');
    const emptyState = document.getElementById('emptyReminders');
    if (!list) return;

    const reminders = getReminders();
    const today = new Date().toISOString().split('T')[0];

    // Сортировка: просроченные → ближайшие → остальные
    reminders.sort((a, b) => {
        if (a.date < today && b.date >= today) return -1;
        if (a.date >= today && b.date < today) return 1;
        return a.date.localeCompare(b.date);
    });

    if (reminders.length === 0) {
        list.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    list.innerHTML = reminders.map((reminder, index) => {
        const plant = plants.find(p => p.id === reminder.plantId);
        const plantName = plant ? plant.name : 'Неизвестное растение';
        const typeLabels = {
            water: ' Полив',
            fertilize: '🧪 Удобрение',
            repot: '🪴 Пересадка',
            prune: '✂️ Обрезка',
            mist: '💨 Опрыскивание'
        };

        let statusClass = '';
        let statusText = '';
        if (reminder.date < today) {
            statusClass = 'overdue';
            statusText = '⚠️ Просрочено';
        } else if (reminder.date === today) {
            statusClass = 'upcoming';
            statusText = '📌 Сегодня';
        } else {
            statusText = `📅 ${formatDate(reminder.date)}`;
        }

        if (reminder.done) {
            statusClass = 'done';
            statusText = '✅ Выполнено';
        }

        return `
            <div class="reminder-item ${statusClass}">
                <div class="reminder-info">
                    <h3>${typeLabels[reminder.type] || reminder.type} — ${plantName}</h3>
                    <p>${statusText} ${reminder.repeat > 0 ? `• Повтор каждые ${reminder.repeat} дн.` : ''}</p>
                    ${reminder.note ? `<p>📝 ${reminder.note}</p>` : ''}
                </div>
                <div class="reminder-actions">
                    ${!reminder.done ? `<button class="btn-done" onclick="markReminderDone(${index})">✓ Выполнено</button>` : ''}
                    <button class="btn-danger" onclick="deleteReminder(${index})">Удалить</button>
                </div>
            </div>
        `;
    }).join('');
}

function populateReminderPlantSelect() {
    const select = document.getElementById('reminderPlant');
    if (!select) return;

    const collection = getCollection();
    if (collection.length === 0) {
        select.innerHTML = '<option value="">Сначала добавьте растения в коллекцию</option>';
        return;
    }

    select.innerHTML = collection.map(item => {
        const plant = plants.find(p => p.id === item.plantId);
        return `<option value="${item.plantId}">${plant ? plant.emoji : '🌿'} ${item.nickname || plant?.name || 'Растение'}</option>`;
    }).join('');
}

function openReminderModal() {
    document.getElementById('reminderModal').classList.add('active');
    // Установить дату по умолчанию — завтра
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('reminderDate');
    if (dateInput && !dateInput.value) {
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
}

function closeReminderModal() {
    document.getElementById('reminderModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reminderForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const plantId = parseInt(document.getElementById('reminderPlant').value);
            const type = document.getElementById('reminderType').value;
            const date = document.getElementById('reminderDate').value;
            const note = document.getElementById('reminderNote').value;
            const repeat = parseInt(document.getElementById('reminderRepeat').value) || 0;

            const reminders = getReminders();
            reminders.push({
                plantId,
                type,
                date,
                note,
                repeat,
                done: false,
                createdAt: new Date().toISOString()
            });

            saveReminders(reminders);
            closeReminderModal();
            form.reset();
            renderReminders();
            showToast('Напоминание создано! ');
        });
    }
});

function markReminderDone(index) {
    const reminders = getReminders();
    const reminder = reminders[index];

    if (reminder.repeat > 0) {
        // Создаём следующее напоминание
        const nextDate = new Date(reminder.date);
        nextDate.setDate(nextDate.getDate() + reminder.repeat);
        reminders.push({
            ...reminder,
            date: nextDate.toISOString().split('T')[0],
            done: false,
            createdAt: new Date().toISOString()
        });
    }

    reminders[index].done = true;
    saveReminders(reminders);
    renderReminders();
    showToast('Напоминание выполнено! ✅');
}

function deleteReminder(index) {
    const reminders = getReminders();
    reminders.splice(index, 1);
    saveReminders(reminders);
    renderReminders();
    showToast('Напоминание удалено');
}

function checkReminders() {
    const reminders = getReminders();
    const today = new Date().toISOString().split('T')[0];
    const overdue = reminders.filter(r => r.date <= today && !r.done);

    if (overdue.length > 0) {
        setTimeout(() => {
            showToast(`️ У вас ${overdue.length} напоминание(й) на сегодня!`);
        }, 500);
    }
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getPlantWord(count) {
    const lastTwo = count % 100;
    const lastOne = count % 10;

    if (lastTwo >= 11 && lastTwo <= 19) return 'растений';
    if (lastOne === 1) return 'растение';
    if (lastOne >= 2 && lastOne <= 4) return 'растения';
    return 'растений';
}

// Закрытие модалок по клику на оверлей
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

function setupAddForm(plantId) {
    const form = document.getElementById('addPlantForm');
    if (!form) return;

    const plant = plants.find(p => p.id === plantId);
    if (plant) {
        document.getElementById('addPlantName').value = `${plant.emoji} ${plant.name}`;
        // Установить сегодняшнюю дату по умолчанию
        document.getElementById('addPlantDate').value = new Date().toISOString().split('T')[0];
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nickname = document.getElementById('addPlantNickname').value;
        const date = document.getElementById('addPlantDate').value;
        const location = document.getElementById('addPlantLocation').value;

        const collection = getCollection();

        if (collection.some(item => item.plantId === plantId)) {
            showToast('Это растение уже в коллекции!');
            return;
        }

        collection.push({
            plantId,
            nickname: nickname || plant.name,
            dateAdded: date || new Date().toISOString().split('T')[0],
            location
        });

        saveCollection(collection);
        closeAddModal();
        renderPlantDetail(plantId);
        showToast('Растение добавлено в коллекцию! 🌿');
    });
}