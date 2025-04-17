# **React Native Лабораторні роботи**  

## **📌 Перелік лабораторних робіт**  

### **🔹 Лабораторна 1: Базовий додаток React (ToDo List)**  
**Технології:**  
- React Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`)  
- Context API для глобального стану  
- Локальне сховище (`localStorage`)  
- Деструктуризація пропсів  
- Оптимізація рендерингу (`key` для списків)  

**Функціонал:**  
✅ Додавання/видалення/редагування завдань  
✅ Фільтрація (всі/активні/виконані)  
✅ Темна/світла тема  
✅ Автозбереження стану  

---

### **🔹 Лабораторна 2: Компоненти макету (Flexbox)**  
**Технології:**  
- Flexbox (`flexDirection`, `justifyContent`, `alignItems`)  
- `Dimensions` для адаптивності  
- `Platform.select` для різних ОС  
- `ScrollView`  

**Реалізовані макети:**  
📏 **Рядок** (`flexDirection: 'row'`)  
📐 **Колонка** (`flexDirection: 'column'`)  
🔳 **Сітка** (`flexWrap: 'wrap'`)  

---

### **🔹 Лабораторна 3: Навігація**  
**Технології:**  
- React Navigation (`@react-navigation/native`)  
- Stack Navigator (переходи між екранами)  
- Tab Navigator (нижня панель)  
- Drawer Navigator (бічне меню)  
- Параметри маршрутів (`route.params`)  

**Функціонал:**  
➡️ Перехід між 3+ екранами  
🔄 Передача даних між екранами  
🎨 Кастомні хедери  

---

### **🔹 Лабораторна 4: Ввід даних та геолокація**  
**Технології:**  
- Форми (`TextInput`, `Switch`, `Picker`)  
- `expo-location` для GPS  
- `react-native-maps` (маркери, полігони)  
- Валідація даних  

**Функціонал:**  
📍 Відображення локації користувача  
🗺️ Мапа з маркерами  
✈️ Toggle-логіка (Wi-Fi/Airplane Mode)  

---

### **🔹 Лабораторна 5: Жести та анімації**  
**Технології:**  
- `react-native-gesture-handler` (свайпи)  
- `Pressable` vs `TouchableOpacity`  
- `ScrollView`/`FlatList` з pull-to-refresh  
- `react-native-reanimated`  

**Реалізовані жести:**  
👆 Тач (натискання, довгий тап)  
🔄 Свайпи (видалення елементів)  
📜 Прокрутка з підвантаженням  

---

### **🔹 Лабораторна 6: Сповіщення**  
**Технології:**  
- `react-native-modal` (кастомні модалки)  
- `react-native-toast-message`  
- Індикатор завантаження  

**Типи сповіщень:**  
🟢 Confirm Modal (Так/Ні)  
🔴 Error Modal (Fix/Ignore)  
💬 Toast (автозникнення)  
⏳ Loading Spinner  

---

## **🚀 Як запустити?**  
```bash
git clone [repo-url]
cd [project-folder]
npm install
npx expo start
```

## **📚 Використані бібліотеки**  
- `expo`  
- `@react-navigation/*`  
- `react-native-maps`  
- `react-native-gesture-handler`  
- `react-native-toast-message`  

---

**© 2025 | Hnatyuk-Shapoval Danyil**  
📧 **LinkedIn:** [[mazzarin](https://www.linkedin.com/in/mazzarin/)]