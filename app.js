const defaultStores = [
    { name: 'LJ Grageru 0029', goal: 0, daily: 219.90, actual: 0, manager: '-', monthlyGoal: 6597 },
    { name: 'LJ Madalena 0004', goal: 0, daily: 274.90, actual: 0, manager: '-', monthlyGoal: 8247 },
    { name: 'SH Caruaru 0034', goal: 0, daily: 219.00, actual: 0, manager: '-', monthlyGoal: 6570 },
    { name: 'SH Guara 0003', goal: 0, daily: 1115.20, actual: 24113.35, manager: '-', monthlyGoal: 15000 },
    { name: 'SH Paulista 0093', goal: 0, daily: 1597.00, actual: 0, manager: '-', monthlyGoal: 47910 },
    { name: 'SH RECIFE 0089', goal: 0, daily: 1919.90, actual: 0, manager: '-', monthlyGoal: 57597 },
    { name: 'SH Rio mar 0037', goal: 0, daily: 344.90, actual: 0, manager: '-', monthlyGoal: 10347 },
    { name: 'SH River 0032', goal: 0, daily: 0, actual: 0, manager: '-', monthlyGoal: 0 },
    { name: 'SH Terezina 0101', goal: 0, daily: 142.90, actual: 0, manager: '-', monthlyGoal: 4287 },
    { name: 'SH Vitória 0056', goal: 0, daily: 0, actual: 0, manager: '-', monthlyGoal: 0 }
];

let rawStores = localStorage.getItem('stores');
let stores = [];

try {
    stores = JSON.parse(rawStores) || defaultStores;
} catch (e) {
    stores = defaultStores;
}

// Migration: Sync with defaultStores to ensure correct values are always displayed
const defaultMap = {};
defaultStores.forEach(s => defaultMap[s.name] = s);

if (!stores || stores.length === 0 || stores.some(s => s.name === 'Loja Matriz' || s.name === 'Loja Shopping')) {
    // First ever visit or old example data - use defaults
    stores = defaultStores;
} else {
    stores = stores.map(store => {
        const def = defaultMap[store.name];
        return {
            ...store,
            // Always sync financial values from code (ensures updates are reflected)
            daily: def ? def.daily : (store.daily || 0),
            monthlyGoal: def ? def.monthlyGoal : (store.monthlyGoal || store.daily * 30 || 0),
            actual: def ? def.actual : (store.actual || 0),
            manager: store.manager || '-',
            techCount: store.techCount || 0,
            techNames: store.techNames || ''
        };
    });
}
localStorage.setItem('stores', JSON.stringify(stores));

// Always ensure sorting
stores.sort((a, b) => a.name.localeCompare(b.name));

let osList = JSON.parse(localStorage.getItem('osList')) || [
    { "date": "01/02/26", "number": "0006275", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "01/02/26", "number": "0006276", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "01/02/26", "number": "0006277", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "01/02/26", "number": "0006278", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "02/02/26", "number": "0006281", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "03/02/26", "number": "0006286", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "04/02/26", "number": "0006288", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "04/02/26", "number": "0006290", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "04/02/26", "number": "0006291", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "05/02/26", "number": "0006292", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "05/02/26", "number": "0006293", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "05/02/26", "number": "0006294", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "05/02/26", "number": "0006295", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "05/02/26", "number": "0006296", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "06/02/26", "number": "0006299", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "06/02/26", "number": "0006300", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "07/02/26", "number": "0006298", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "07/02/26", "number": "0006301", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "07/02/26", "number": "0006302", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "07/02/26", "number": "0006304", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "07/02/26", "number": "0006305", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "07/02/26", "number": "0006306", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "09/02/26", "number": "0006282", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "09/02/26", "number": "0006307", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "09/02/26", "number": "0006308", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "09/02/26", "number": "0006309", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "09/02/26", "number": "0006310", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "10/02/26", "number": "0006311", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "10/02/26", "number": "0006312", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "11/02/26", "number": "0006313", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "11/02/26", "number": "0006314", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "11/02/26", "number": "0006315", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "11/02/26", "number": "0006316", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "11/02/26", "number": "0006317", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "12/02/26", "number": "0006319", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "12/02/26", "number": "0006320", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "13/02/26", "number": "0006321", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "13/02/26", "number": "0006322", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "13/02/26", "number": "0006323", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "13/02/26", "number": "0006324", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "13/02/26", "number": "0006325", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "13/02/26", "number": "0006326", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "14/02/26", "number": "0006328", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "15/02/26", "number": "0006329", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "17/02/26", "number": "0006330", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "17/02/26", "number": "0006331", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "19/02/26", "number": "0006335", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "19/02/26", "number": "0006336", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "20/02/26", "number": "0006337", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "20/02/26", "number": "0006338", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "20/02/26", "number": "0006339", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "20/02/26", "number": "0006340", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "20/02/26", "number": "0006342", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "20/02/26", "number": "0006343", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "21/02/26", "number": "0006345", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "21/02/26", "number": "0006346", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "21/02/26", "number": "0006347", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "21/02/26", "number": "0006348", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "21/02/26", "number": "0006349", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "21/02/26", "number": "0006350", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "22/02/26", "number": "0006351", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "22/02/26", "number": "0006352", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "23/02/26", "number": "0006353", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "23/02/26", "number": "0006354", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "23/02/26", "number": "0006355", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "23/02/26", "number": "0006356", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "23/02/26", "number": "0006357", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "25/02/26", "number": "0006362", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "26/02/26", "number": "0006360", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "26/02/26", "number": "0006366", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "26/02/26", "number": "0006367", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "26/02/26", "number": "0006368", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "27/02/26", "number": "0006333", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "27/02/26", "number": "0006369", "status": "RPS Gerada", "store": "SH Guara 0003" },
    { "date": "27/02/26", "number": "0006370", "status": "RPS Gerada", "store": "SH Guara 0003" }
];

let currentUploadType = 'metas';

// Initialize Lucide
lucide.createIcons();

// Navigation
function toggleView(view) {
    const dashboard = document.getElementById('dashboard-view');
    const admin = document.getElementById('admin-panel');
    const osView = document.getElementById('os-view');
    const configPanel = document.getElementById('config-panel');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => item.classList.remove('active'));
    dashboard.style.display = 'none';
    admin.style.display = 'none';
    osView.style.display = 'none';
    if (configPanel) configPanel.style.display = 'none';

    if (view === 'admin') {
        admin.style.display = 'block';
        navItems[2].classList.add('active');
        renderAdminTable();
    } else if (view === 'os') {
        osView.style.display = 'block';
        navItems[1].classList.add('active');
        renderOSTable();
    } else if (view === 'config') {
        if (configPanel) configPanel.style.display = 'block';
        navItems[3].classList.add('active');
        renderConfigStores();
    } else {
        dashboard.style.display = 'block';
        navItems[0].classList.add('active');
        renderDashboard();
    }

    // Always render productivity if on OS view
    if (view === 'os') {
        renderProductivity();
    }

    lucide.createIcons();
}

// Render Dashboard
function renderDashboard() {
    renderStoresList();
    updateKPIs();
    initChart();
}

// Update KPI Values
function updateKPIs() {
    const totalActual = stores.reduce((acc, s) => acc + (parseFloat(s.actual) || 0), 0);
    const totalMonthlyGoal = stores.reduce((acc, s) => acc + (parseFloat(s.monthlyGoal) || 0), 0);
    const globalPerformance = totalMonthlyGoal > 0 ? (totalActual / totalMonthlyGoal * 100).toFixed(1) : 0;

    const kpi1 = document.querySelector('.kpi-grid .card:nth-child(1) .kpi-value');
    if (kpi1) kpi1.textContent = globalPerformance + '%';

    const kpi2 = document.querySelector('.kpi-grid .card:nth-child(2) .kpi-value');
    if (kpi2) kpi2.textContent = totalActual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Render Stores List (Dashboard)
function renderStoresList() {
    const container = document.getElementById('store-list-container');
    if (!container) return;
    container.innerHTML = '';

    stores.forEach((store) => {
        const item = document.createElement('div');
        item.className = 'store-item';
        const dailyFormatted = (parseFloat(store.daily) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const actualFormatted = (parseFloat(store.actual) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const monthlyGoalFormatted = (parseFloat(store.monthlyGoal) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        const remaining = (parseFloat(store.monthlyGoal) || 0) - (parseFloat(store.actual) || 0);
        const remainingFormatted = remaining > 0 ? remaining.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00';

        const performance = store.monthlyGoal > 0 ? Math.round((store.actual / store.monthlyGoal) * 100) : 0;

        // Count OS for this store
        const osCount = osList.filter(os => os.store === store.name).length;

        item.innerHTML = `
            <div class="store-info">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <h4>${store.name}</h4>
                    ${osCount > 0 ? `<span style="background: var(--primary); color: white; padding: 1px 6px; border-radius: 8px; font-size: 9px; font-weight: 700;">${osCount} OS</span>` : ''}
                </div>
                <p>Gerente: ${store.manager} | Técnicos: ${store.techCount || 0}</p>
                <div style="font-size: 11px; margin-top: 6px; color: var(--text-muted);">
                    <p>🎯 Meta Diária: <b>${dailyFormatted}</b></p>
                    <p>📅 Meta Mês: <b>${monthlyGoalFormatted}</b></p>
                    <p style="color: var(--primary); font-weight: 700;">💰 Vendido até hoje: ${actualFormatted}</p>
                    <p style="color: ${remaining <= 0 ? '#166534' : '#991b1b'}; font-weight: 600;">
                        ${remaining <= 0 ? '✅ Meta Atingida!' : `🚀 Faltam: ${remainingFormatted}`}
                    </p>
                </div>
            </div>
            <div style="text-align: right">
                <div style="font-weight: 800; color: var(--primary); font-size: 18px;">${performance}%</div>
                <div style="font-size: 10px; color: var(--text-muted)">Atingimento</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// Render OS Table
function renderOSTable() {
    const tbody = document.getElementById('os-table-body');
    const countSpan = document.getElementById('os-count');
    if (!tbody) return;

    tbody.innerHTML = '';
    countSpan.textContent = `${osList.length} Total OS`;

    osList.forEach((os) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${os.date}</td>
            <td style="font-weight: 600; color: var(--text-color);">${os.store || '-'}</td>
            <td style="color: var(--text-muted);">${os.technician || 'Não Atribuído'}</td>
            <td style="font-weight: 700; color: var(--accent);">#${os.number}</td>
            <td><span style="background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; font-weight: 600;">${os.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Render Admin Table
function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    stores.forEach((store, index) => {
        const dailyFmt = (parseFloat(store.daily) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const monthlyFmt = (parseFloat(store.monthlyGoal) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const actualFmt = (parseFloat(store.actual) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const performance = store.monthlyGoal > 0 ? Math.round((store.actual / store.monthlyGoal) * 100) : 0;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${store.name}</td>
            <td>${dailyFmt}</td>
            <td>${monthlyFmt}</td>
            <td>${actualFmt}</td>
            <td style="font-weight: 800; color: var(--primary);">${performance}%</td>
            <td>${store.manager}</td>
            <td style="text-align: right;">
                <button class="action-btn" onclick="editItem(${index})"><i data-lucide="edit-3" style="width:16px"></i></button>
                <button class="action-btn delete" onclick="deleteItem(${index})"><i data-lucide="trash-2" style="width:16px"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

// Modal Logic
function showAddModal() {
    document.getElementById('modal-title').textContent = 'Nova Meta';
    document.getElementById('edit-index').value = '';
    document.getElementById('store-form').reset();
    document.getElementById('item-modal').classList.add('active');
}

function editItem(index) {
    const store = stores[index];
    document.getElementById('modal-title').textContent = 'Editar Meta';
    document.getElementById('edit-index').value = index;
    document.getElementById('store-name').value = store.name;
    document.getElementById('store-daily').value = store.daily || 0;
    document.getElementById('store-monthly').value = store.monthlyGoal || 0;
    document.getElementById('store-actual').value = store.actual || 0;
    document.getElementById('store-manager').value = store.manager;
    document.getElementById('store-tech-count').value = store.techCount || 0;
    document.getElementById('store-tech-names').value = store.techNames || '';
    document.getElementById('item-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('item-modal').classList.remove('active');
}

function deleteItem(index) {
    if (confirm('Tem certeza que deseja excluir esta meta?')) {
        stores.splice(index, 1);
        saveAndRefresh();
    }
}

// Handle Form Submission
const storeForm = document.getElementById('store-form');
if (storeForm) {
    storeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = document.getElementById('edit-index').value;
        const name = document.getElementById('store-name').value;
        const daily = parseFloat(document.getElementById('store-daily').value) || 0;
        const monthlyGoal = parseFloat(document.getElementById('store-monthly').value) || 0;
        const actual = parseFloat(document.getElementById('store-actual').value) || 0;
        const manager = document.getElementById('store-manager').value;
        const techCount = parseInt(document.getElementById('store-tech-count').value) || 0;
        const techNames = document.getElementById('store-tech-names').value;

        const goal = monthlyGoal > 0 ? Math.round((actual / monthlyGoal) * 100) : 0;
        const data = { name, goal, daily, actual, manager, monthlyGoal, techCount, techNames };

        if (index === '') stores.push(data);
        else stores[index] = data;

        saveAndRefresh();
        closeModal();
    });
}

function saveAndRefresh() {
    localStorage.setItem('stores', JSON.stringify(stores));
    localStorage.setItem('osList', JSON.stringify(osList));
    renderAdminTable();
    renderDashboard();
    renderOSTable();
    renderProductivity();
}

// Render Productivity View
function renderProductivity() {
    const container = document.getElementById('productivity-container');
    if (!container) return;
    container.innerHTML = '';

    // Group OS by technician
    const techStats = {};
    osList.forEach(os => {
        const tech = os.technician || 'Outros';
        if (!techStats[tech]) techStats[tech] = 0;
        techStats[tech]++;
    });

    Object.keys(techStats).forEach(tech => {
        const count = techStats[tech];
        const item = document.createElement('div');
        item.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f3f4f6;';
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <div style="background: var(--primary-light); color: var(--primary); padding: 5px; border-radius: 50%;">
                    <i data-lucide="user" style="width: 14px;"></i>
                </div>
                <span style="font-size: 13px; font-weight: 600;">${tech}</span>
            </div>
            <span class="badge" style="background: #e0f2fe; color: #0369a1; font-weight: 700;">${count} OS</span>
        `;
        container.appendChild(item);
    });
    lucide.createIcons();
}

// Excel Upload & Sync Logic
function triggerUpload(type) {
    currentUploadType = type;
    document.getElementById('excel-upload').click();
}

document.getElementById('excel-upload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (jsonData.length > 0) {
            if (currentUploadType === 'metas') {
                stores = jsonData.map(row => {
                    const daily = parseFloat(row['Meta Diária'] || row['meta_diaria'] || 0);
                    const actual = parseFloat(row['Vendido Hoje'] || row['vendido_hoje'] || 0);
                    return {
                        name: row['Nome'] || row['nome'] || 'N/A',
                        daily: daily,
                        actual: actual,
                        manager: row['Gerente'] || row['gerente'] || 'N/A',
                        goal: daily > 0 ? Math.round((actual / daily) * 100) : 0
                    };
                });
            } else {
                const newOSEntries = jsonData.map(row => {
                    const tech = row['Tecnico'] || row['Técnico'] || row['Funcionario'] || row['Colaborador'] || 'Não Atribuído';
                    const storeName = row['Loja'] || row['loja'] || row['Unidade'] || 'Não Atribuída';
                    return {
                        date: row['Data'] || row['data'] || 'N/A',
                        number: String(row['Numero OS'] || row['numero_os'] || row['Nº OS'] || row['OS'] || '0000'),
                        status: row['Status'] || row['status'] || 'RPS Gerada',
                        store: storeName,
                        technician: tech
                    };
                });

                // Merge with existing list, avoiding duplicates by OS number
                const existingNumbers = new Set(osList.map(os => String(os.number)));
                newOSEntries.forEach(entry => {
                    if (!existingNumbers.has(entry.number)) {
                        osList.push(entry);
                    } else {
                        // Update existing entry if needed (e.g. status change)
                        const idx = osList.findIndex(os => String(os.number) === entry.number);
                        osList[idx] = { ...osList[idx], ...entry };
                    }
                });
            }
            saveAndRefresh();
            alert(`Sincronização de ${currentUploadType} concluída!`);
        }
    };
    reader.readAsArrayBuffer(file);
});

// Download Models
document.getElementById('download-model').addEventListener('click', (e) => {
    e.preventDefault();
    const data = [['Nome', 'Meta Diária', 'Vendido Hoje', 'Gerente']];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Metas");
    XLSX.writeFile(wb, "modelo_metas.xlsx");
});

document.getElementById('download-os-model').addEventListener('click', (e) => {
    e.preventDefault();
    const data = [['Data', 'Numero OS', 'Status']];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "OS");
    XLSX.writeFile(wb, "modelo_os_rps.xlsx");
});

// Chart Logic
let chartInstance = null;
function initChart() {
    const canvas = document.getElementById('storesChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stores.map(s => s.name),
            datasets: [
                { label: 'Vendido (R$)', data: stores.map(s => s.actual), backgroundColor: '#1e40af', borderRadius: 4, barThickness: 15 },
                { label: 'Meta (R$)', data: stores.map(s => s.daily), backgroundColor: '#e2e8f0', borderColor: '#94a3b8', borderWidth: 1, borderRadius: 4, barThickness: 15 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: true, position: 'top', align: 'end', labels: { boxWidth: 10, font: { size: 10 } } } },
            scales: { y: { beginAtZero: true, grid: { color: '#f3f4f6' } }, x: { grid: { display: false } } }
        }
    });
}

// Config Logic
function renderConfigStores() {
    const container = document.getElementById('config-stores-list');
    if (!container) return;
    container.innerHTML = '';

    stores.forEach((store, index) => {
        const div = document.createElement('div');
        div.style.cssText = 'padding: 12px; border: 1px solid #f3f4f6; border-radius: 8px; margin-bottom: 10px; background: #fafafa;';
        div.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div>
                    <label style="font-size: 10px; color: var(--text-muted); font-weight: 600;">NOME DA LOJA</label>
                    <input type="text" class="bulk-store-name" data-index="${index}" value="${store.name}" 
                           style="padding: 6px; font-size: 13px; font-weight: 600;">
                </div>
                <div>
                    <label style="font-size: 10px; color: var(--text-muted); font-weight: 600;">META DO MÊS (R$)</label>
                    <input type="number" step="0.01" class="bulk-store-goal" data-index="${index}" value="${store.monthlyGoal}" 
                           style="padding: 6px; font-size: 13px; font-weight: 600;">
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function saveAllStoresConfig() {
    const names = document.querySelectorAll('.bulk-store-name');
    const goals = document.querySelectorAll('.bulk-store-goal');

    names.forEach((input, i) => {
        const index = input.getAttribute('data-index');
        const newName = input.value;
        const newGoal = parseFloat(goals[i].value) || 0;

        stores[index].name = newName;
        stores[index].monthlyGoal = newGoal;

        // Recalculate performance if possible
        if (newGoal > 0) {
            stores[index].goal = Math.round((stores[index].actual / newGoal) * 100);
        }
    });

    saveAndRefresh();
    alert('Todas as lojas foram atualizadas com sucesso!');
}

function saveGlobalConfig() {
    const companyName = document.getElementById('config-company-name').value;
    const globalGoal = document.getElementById('config-global-goal').value;

    const settings = { companyName, globalGoal };
    localStorage.setItem('appSettings', JSON.stringify(settings));

    // Update UI
    const h1s = document.querySelectorAll('header h1');
    h1s.forEach(h1 => h1.textContent = companyName);

    alert('Configurações salvas com sucesso!');
}

function exportAppData() {
    const data = {
        stores: stores,
        osList: osList,
        settings: JSON.parse(localStorage.getItem('appSettings'))
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_dr_nagem_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    renderOSTable();

    // Load settings
    const settings = JSON.parse(localStorage.getItem('appSettings'));
    if (settings) {
        document.getElementById('config-company-name').value = settings.companyName || 'Dr. Nagem';
        document.getElementById('config-global-goal').value = settings.globalGoal || '';
        const h1s = document.querySelectorAll('header h1');
        h1s.forEach(h1 => h1.textContent = settings.companyName);
    }

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateE = document.getElementById('current-date');
    if (dateE) dateE.textContent = new Date().toLocaleDateString('pt-BR', options);
});
