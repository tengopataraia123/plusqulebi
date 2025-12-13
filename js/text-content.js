// Text content for the website
const translations = {
  ka: {
    // Navigation
    "nav.how": "როგორ მუშაობს",
    "nav.faq": "ხშირი კითხვები",
    "nav.contact": "კონტაქტი",
    "nav.start": "დაწყება",

    // Main content
    "main.title": 'გადაცვლე <span class="highlight">PLUS ქულები</span> ლარში',

    // Tabs
    "tabs.sell": "გაყიდვა",
    "tabs.buy": "ყიდვა",

    // Coming soon
    "coming_soon.title": "მალე 🔜",
    "coming_soon.description":
      "გუნდი მუშაობს უსაფრთხო შეკვეთის ველებზე, ფასების ლიმიტებზე და ესკროზე. დაემატება უახლოეს მომავალში.",

    // Calculator
    "calc.send_points":
      "გამოგზავნეთ მითითებულ პირად ნომერზე ნებისმიერი ოდენობის PLUS ქულა:",
    "calc.receive_value": "მიიღეთ ღირებულების 101% თითოეულ გაცვლაზე",
    "calc.calculator": "კალკულატორი",
    "calc.plus_amount": "Plus ქულების რაოდენობა",
    "calc.plus_placeholder": "მაგ: 400",
    "calc.gel_amount": "მიიღებ ₾",
    "calc.current_rate": "მიმდინარე კურსი:",
    "calc.photo_instruction": "ფოტო ინსტრუქცია",
    "calc.video_instruction": "ვიდეო ინსტრუქცია",
    "calc.copy_id": "დააკოპირე პროფილ ID",

    // FAQ
    "faq.title": "ხშირად დასმული კითხვები",
    "faq.safe": "უსაფრთხოა ქულების გაყიდვა/ყიდვა?",
    "faq.safe_answer":
      "დიახ. 200-ზე მეტ ადამიანთან 50 000 ლარზე მეტი ქულა მაქვს გადაცვლილი ამ დროის განმავლობაში. თუ გადმორიცხვიდან 1 წუთში არ ჩაგერიცხათ თანხა, შეგიძლიათ ჩათვალოთ, რომ პროგრამული ხარვეზია, დამიკავშირდით და მაშინვე მოვაგვარებთ პრობლემას.",
    "faq.time": "რამდენ ხანში აისახება თანხა ანგარიშზე?",
    "faq.time_answer":
      "მაქსიმუმ 1 წუთი შეიძლება დასჭირდეს. თუ ამ დროში არ ჩაგერიცხათ, შეგიძლიათ მოგვწეროთ, ან დაგვირეკოთ ნებისმიერ საკონტაქტო არხზე და მაშინვე მოვაგვარებთ პრობლემას.",
    "faq.how_sell": "როგორ უნდა გავყიდო PLUS ქულები?",
    "faq.how_sell_answer":
      'თქვენ შეგიძლიათ ნახოთ როგორც: <a data-modal-target="#carouselModal">ფოტო</a> ასევე <a data-modal-target="#videoModal" data-video-src="https://www.youtube-nocookie.com/embed/BiqPQ8PFgHw?rel=0">ვიდეო</a> ინსტრუქცია.',
    "faq.where_money":
      "სად დამერიცხება გაყიდული PLUS ქულებიდან მიღებული თანხა?",
    "faq.where_money_answer":
      "თანხა დაახლოებით 1 წუთში აგესახებათ გადმომრიცხავის პირად ანგარიშზე.",
    "faq.rate": "რა არის კურსი?",
    "faq.rate_answer":
      "პერიოდულობის მიხედვით იცვლება. დასაწყისისთვის კურსი არის 400 Plus = 1.01 ₾. კურსი შეგიძლია გადაამოწმოთ ჩვენს კალკულატორზე.",
    "faq.range": "არსებობს გადმორიცხვის მინიმალური და მაქსიმალური ზღვარი?",
    "faq.range_answer":
      "მინიმალური ზღვარი არის 40 PLUS ქულა. უფრო ნაკლებს ნუ გადმორიცხავთ, დღის ბოლოს ყველა 40 ქულაზე ნაკლები გადმორიცხვა უკან ბრუნდება. მაქსიმალური ზღვარი არ არსებობს, მაგრამ შეიძლება მოხდეს ისეთი რამ ბალანსზე თანხა ამოგვეწუროს და დინამიურად შევსება ვერ მოვასწროთ ასეთ შემთხვევაში PLUS ქულები უკან დაგიბრუნდებათ. ნებისმიერი გაუგებრობის შემთხვევაში შეგიძლიათ ჩვენი ნებისმიერი ცხელი ხაზი გამოიყენოთ და დაგვიკავშირდეთ.",

    // About section
    "about.how_works": "როგორ მუშაობს?",

    "about.step1":
      '<b>PLUS</b> ქულების გაყიდვის შემთხვევაში იხილეთ <a data-modal-target="#carouselModal">ფოტო</a> ან <a data-modal-target="#videoModal" data-video-src="https://www.youtube-nocookie.com/embed/BiqPQ8PFgHw?rel=0">ვიდეო</a> ინსტრუქცია.',
    "about.step2":
      "მიიღე ზუსტი თანხა ლარში ავტომატურად მაქსიმუმ 1 წუთში, იმ ადამიანის სახელზე ვისგანაც დაგვირიცხავთ ქულებს.",
    "about.step3":
      "თუ ტექნიკური ხარვეზი დაფიქსირდა და 1 წუთში არ დაგერიცხათ თანხა. გვიკავშირდებით ნებისმიერ ცხელ ხაზზე და მალევე ვაგვარებთ პრობლემას.",
    "about.privacy":
      "შენახული მონაცემები მინიმალურია და გამოიყენება მხოლოდ თაღლითობის პრევენციისთვის ან სამომავლოდ გამარჯვებულთა გამოსავლენად.",

    // Explanation section
    "explain.program": "საქართველოს ბანკის PLUS ქულების ლოიალობის პროგრამა",
    "explain.what_is": "რა არის Plus ქულები?",
    "explain.description":
      "<strong>Plus ქულები</strong> არის საქართველოს ბანკის ლოიალობის პროგრამის ბონუს ქულები, რომლებიც გროვდება მომხმარებლის ბარათით ტრანზაქციების ან საბანკო სერვისების გამოყენების შედეგად. ქულები შეგიძლიათ გადაცვალოთ ლარში, გამოიყენოთ ფასდაკლებებისთვის და სერვისებისათვის, ან დახარჯოთ პარტნიორ მაღაზიებში.",
    "explain.benefit1": "დაგროვება ბარათით გადახდებზე",
    "explain.benefit2": "ონლაინ შესყიდვებისთვის სპეციალური ბონუსები",
    "explain.benefit3": "პარტნიორი კომპანიების ექსკლუზიური შეთავაზებები",
    "explain.how_collect": "როგორ დავაგროვოთ Plus ქულები?",
    "explain.collect_intro":
      "ქულების დაგროვება მარტივია — უბრალოდ გამოიყენე შენი საქართველოს ბანკის ბარათი. ქვემოთ ძირითადი გზებია:",
    "explain.method1": "1. ბარათით გადახდა",
    "explain.method1_desc":
      "Plus ქულები ავტომატურად დაგროვდება ადგილობრივ და საერთაშორისო მაღაზიებში შესრულებული გადახდებისას",
    "explain.method2": "2. ონლაინ შესყიდვები",
    "explain.method2_desc":
      "ინტერნეტში განხორციელებულ ტრანზაქციებზეც ხშირად დაირიცხება დამატებითი ქულები.",
    "explain.method3": "3. საბანკო სერვისებით სარგებლობა",
    "explain.method3_desc":
      "ზოგიერთი საბანკო პროდუქტის ან სერვისის გამოყენება დამატებით ქულებს იძლევა — შეამოწმე პირობები კონკრეტულ სერვისზე.",
    "explain.method4": "4. პარტნიორი კომპანიები",
    "explain.method4_desc":
      "გაიგე ბანკის პარტნიორთა სია — პარტნიორებთან გადახდისას ხშირად მეტი ბონუსია.",
    "explain.how_use": "როგორ გამოვიყენოთ Plus ქულები?",
    "explain.use_intro":
      "ქულების გამოყენების მრავალი გზა არსებობს — აი ყველაზე პოპულარულები:",
    "explain.exchange_title": "Plus ქულების გაცვლა ლარში (plusqulebi.ge)",
    "explain.exchange_desc":
      "plusqulebi.ge პლატფორმაზე შეგიძლიათ გაყიდოთ ან გაცვალოთ Plus ქულები ლარში — ხშირად მიღებული კურსი უკეთესია, ვიდრე მსგავსი სხვა ვარიანტები. პროცესი შემდეგია:",
    "explain.step1": "შედი plusqulebi.ge-ზე და მოძებნე Plus ქულების სექცია.",
    "explain.step2":
      "შეიყვანე გასაყიდი ქულების რაოდენობა და გაიგე რამდენი ლარი დაგერიცხება.",
    "explain.step3":
      "ნახეთ განაღდების ფოტო და ვიდეო ინსტრუქცია და გააკეთეთ ტრანზაქცია.",
    "explain.stores_title": "მაღაზიები და სერვისები",
    "explain.stores_desc":
      "ქულებით შეგიძლიათ გადაიხადოთ ბანკის პარტნიორ მაღაზიებსა და სერვისებში.",
    "explain.discounts_title": "ფასდაკლებები და საჩუქრები",
    "explain.discounts_desc":
      "ქულების დახმარებით მიიღებთ ფასდაკლებებს ან სპეციალურ საჩუქრებს.",
    "explain.tourism_title": "ტურისტული სერვისები",
    "explain.tourism_desc":
      "ქულების გამოყენება შეგიძლიათ ზოგიერთ პარტნიორ სასტუმროში ან ტურისტულ მომსახურებაზე.",
    "explain.l_package":
      "L პაკეტი: თუ გააქტიურებთ <strong>L პაკეტს</strong>, სტანდარტული ფასდაკლება შეიძლება გაიზარდოს დამატებითი <strong>+10%</strong>-ით (მაქსიმუმ 50%).",
    "explain.check_balance": "როგორ შევამოწმოთ ქულების რაოდენობა?",
    "explain.mobile_bank":
      '<strong>მობილბანკი:</strong> გახსენი საქართველოს ბანკის მობილბანკის აპლიკაცია და ნახე "Plus ქულები"-ს სექცია.',
    "explain.internet_bank":
      "<strong>ინტერნეტ ბანკი:</strong> დაგროვებული ქულების ნახვა ასევე შეგიძლია შენ ონლაინ პროფილზე.",
    "explain.call_center":
      "<strong>ქოლცენტრი:</strong> ნებისმიერ საკითხთან დაკავშირებით დარეკეთ ბანკის ცხელ ხაზზე.",
    "explain.partners_title": "პარტნიორი კომპანიები",
    "explain.partners_desc":
      "პარტნიორთა სია პერიოდულად იცვლება — უახლესი და სრული ინფორმაცია იხილეთ საქართველოს ბანკის ოფიციალურ ვებგვერდზე ან მობილბანკში.",

    // Recent transactions
    "recent.title": "ბოლო ტრანზაქციები",
    "recent.hint": "* გასაჩივრება/ვერიფიკაცია – 24/7",

    // Contact
    "about.who": "ვინ ვართ?",
    "about.admin":
      "საიტის ადმინისტრატორი. მესამე წელი დაიწყო, რაც PLUS ქულებს ვუნაღდებ მომხმარებელს და გადავწყვიტე ამ პროცესის ავტომატიზაცია. ნებისმიერი პრობლემის შემთხვევაში შეგიძლიათ დამიკავშირდეთ.",
    "contact.title": "კონტაქტი",
    "contact.name": "კარლო თევზაძე (პ/ნ: 37001056274)",
    "contact.phone": "T: 597 11 81 75 (Whatsapp, Viber)",

    // Partners
    "partners.title": "პარტნიორი ბიზნესები",
    "partners.description":
      'პარტნიორთა სია პერიოდულად იცვლება — უახლესი და სრული ინფორმაცია იხილეთ საქართველოს ბანკის <a href="https://bankofgeorgia.ge/ka/retail/baratebi/plus-barati#partners" target="_blank">ოფიციალურ ვებგვერდზე</a>',
    "partners.link": "ოფიციალურ ვებგვერდზე",

    // Online indicator
    "online.indicator": "24/7-ზე ხელმისაწვდომია",

    // Modal content
    "modal.photo_title": "ფოტო ინსტრუქცია",
    "modal.step1_title": "ეტაპი I - მთავარი გვერდი",
    "modal.step2_title": "ეტაპი II - PLUS ქულების გვერდი",
    "modal.step3_title": "ეტაპი III - PLUS ქულების გადარიცხვის გვერდი",
    "modal.step4_title": "ეტაპი IV - ბოლო ნაბიჯი: გადარიცხვა",
    "modal.step1_text1": "1. გახსენით საქართველოს ბანკის აპლიკაცია",
    "modal.step1_text2":
      '2. მთავარ გვერდზე შენიშნავთ ლოიალურობის ქვევით მოცემულ <strong>"PLUS ქულებს"</strong> ისრით მითითებულ ადგილას და დააჭირეთ.',
    "modal.step2_text1":
      '1. დააჭირეთ ისრით მითითებულ ღილაკს <strong>"გადარიცხვა"</strong>',
    "modal.step3_text1":
      '1. დააჭირეთ ისრით მითითებულ ველში <strong>"მიმღების პირადი ნომერი"</strong> და შეიყვანეთ მოცემული პირადი ნომერი:',
    "modal.step3_text2":
      "2. პირადი ნომრის შეყვანის შემდეგ მიმღების დასახელება ავტომატურად შეივსება ინიციალებით <strong>კ.თ. (კარლო თევზაძე)</strong>",
    "modal.step3_text3":
      "3. პლიუს ქულების შესავსებ ველში უნდა ჩაწეროთ რამდენი ქულის გადმორიცხვაც გსურთ",
    "modal.step3_text4":
      '4. კომენტარში შეგიძლიათ მიუთითოთ ნებისმიერი, რამ მაგალითად: <strong>"პირადი გადარიცხვა"</strong>',
    "modal.step4_text1":
      '1. თუ ყველაფერი ინსტრუქციის მიხედვით შეავსეთ დააჭირეთ <strong>"გადარიცხვას"</strong> და დაელოდეთ დადასტურებას.',
    "modal.step4_text2":
      "2. თუ ტექნიკური ხარვეზის გამო თანხა გადმორიცხვიდან 1 წუთში ავტომატურად არ აგესახათ, 99% შემთხვევაში მსგავსი რამ არ მოხდება, მაგრამ თუ მოხდა, არ იდარდოთ მოგვწერეთ ნებისმიერ დროს ნებისმიერ საკონტაქტო არხზე და მაშინვე მოვაგვარებთ პრობლემას და ხელით გადმოგირიცხავთ.",
    "modal.step4_text3": "<strong>3. საკონტაქტო საშუალებები:</strong>",
    "modal.contact_phone": "T: 597 11 81 75 (Whatsapp, Viber)",

    // WhatsApp section
    "wa.message":
      'გამარჯობა! დაგვიწერე კითხვა და დააჭირე "გაგზავნას" — გაგიხსნით WhatsApp-ს მომზადებული ტექსტით.',
    "wa.placeholder": "გამარჯობა, მაქვს კითხვა...",
    "wa.send": "გაგზავნა",

    // Online indicator
    "online.indicator": "24/7-ზე ხელმისაწვდომია",
  },

  en: {
    // Navigation
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.start": "Get Started",

    // Main content
    "main.title":
      'Exchange <span class="highlight">PLUS points</span> for Lari',

    // Tabs
    "tabs.sell": "Sell",
    "tabs.buy": "Buy",

    // Coming soon
    "coming_soon.title": "Coming soon 🔜",
    "coming_soon.description":
      "The team is working on secure order fields, price limits and escrow. Will be added in the near future.",

    // Calculator
    "calc.send_points":
      "Send any amount of PLUS points to the specified personal number:",
    "calc.receive_value": "Receive 101% of the value for each exchange",
    "calc.calculator": "Calculator",
    "calc.plus_amount": "Number of Plus points",
    "calc.plus_placeholder": "e.g: 400",
    "calc.gel_amount": "You will receive ₾",
    "calc.current_rate": "Current rate:",
    "calc.photo_instruction": "Photo instruction",
    "calc.video_instruction": "Video instruction",
    "calc.copy_id": "Copy profile ID",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.safe": "Is it safe to sell/buy points?",
    "faq.safe_answer":
      "Yes. I have exchanged over 50,000 Lari worth of points with more than 200 people during this time. If you do not receive the amount within 1 minute of transfer, you can assume it is a software error, contact me and we will solve the problem immediately.",
    "faq.time": "How long does the transaction take?",
    "faq.time_answer":
      "It may take up to 1 minute. If you are not credited within this time, you can write to us or call us on any contact channel and we will resolve the issue immediately.",
    "faq.how_sell": "How do I sell PLUS points?",
    "faq.how_sell_answer":
      'You can view both: <a data-modal-target="#carouselModal">photo</a> and <a data-modal-target="#videoModal" data-video-src="https://www.youtube-nocookie.com/embed/BiqPQ8PFgHw?rel=0">video</a> instructions.',
    "faq.where_money":
      "Where will the money from sold PLUS points be credited to me?",
    "faq.where_money_answer":
      "The amount will be credited to the transferor's personal account in about 1 minute.",
    "faq.rate": "What is the rate?",
    "faq.rate_answer":
      "It varies depending on the period. The starting rate is 400 Plus = 1.01 ₾. You can check the rate on our calculator.",
    "faq.range": "Is there a minimum and maximum transfer limit?",
    "faq.range_answer":
      "The minimum limit is 40 PLUS points. Do not transfer less than that, at the end of the day all transfers less than 40 points will be returned. There is no maximum limit, but it may happen that we run out of money on the balance and we will not be able to replenish dynamically, in which case the PLUS points will be returned to you. In case of any misunderstanding, you can use any of our hotlines and contact us.",

    // About section
    "about.how_works": "How it works?",
    "about.step1":
      'To sell <b>PLUS</b> points, see the <a data-modal-target="#carouselModal">photo</a> or <a data-modal-target="#videoModal" data-video-src="https://www.youtube-nocookie.com/embed/BiqPQ8PFgHw?rel=0">video</a> instruction.',
    "about.step2":
      "Receive the exact amount in Lari automatically within 1 minute, to the account of the person from whom you transferred the points.",
    "about.step3":
      "If a technical error occurs and you do not receive the amount within 1 minute, contact us on any hotline and we will solve the problem immediately.",
    "about.privacy":
      "Stored data is minimal and used only for fraud prevention or to identify future winners.",

    // Explanation section
    "explain.program": "Bank of Georgia PLUS Points Loyalty Program",
    "explain.what_is": "What are Plus points?",
    "explain.description":
      "<strong>Plus points</strong> are bonus points from Bank of Georgia's loyalty program that are accumulated as a result of using the customer's card for transactions or using banking services. Points can be exchanged for Lari, used for discounts and services, or spent at partner stores.",
    "explain.benefit1": "Accumulation on card payments",
    "explain.benefit2": "Special bonuses for online purchases",
    "explain.benefit3": "Exclusive offers from partner companies",
    "explain.how_collect": "How to collect Plus points?",
    "explain.collect_intro":
      "Collecting points is easy — just use your Bank of Georgia card. Below are the main ways:",
    "explain.method1": "1. Card payment",
    "explain.method1_desc":
      "Plus points will be automatically accumulated for payments made at local and international stores",
    "explain.method2": "2. Online purchases",
    "explain.method2_desc":
      "Additional points are often credited for transactions made on the Internet.",
    "explain.method3": "3. Using banking services",
    "explain.method3_desc":
      "Using some banking products or services will give you additional points — check the conditions for specific services.",
    "explain.method4": "4. Partner companies",
    "explain.method4_desc":
      "Find out the bank's partner list — payments with partners often have more bonuses.",
    "explain.how_use": "How to use Plus points?",
    "explain.use_intro":
      "There are many ways to use points — here are the most popular ones:",
    "explain.exchange_title": "Exchange Plus points for Lari (plusqulebi.ge)",
    "explain.exchange_desc":
      "On the plusqulebi.ge platform you can sell or exchange Plus points for Lari — often the rate received is better than other similar options. The process is as follows:",
    "explain.step1": "Go to plusqulebi.ge and find the Plus points section.",
    "explain.step2":
      "Enter the number of points to sell and find out how much Lari will be credited.",
    "explain.step3":
      "View the cashout photo and video instructions and make the transaction.",
    "explain.stores_title": "Stores and services",
    "explain.stores_desc":
      "You can pay with points at the bank's partner stores and services.",
    "explain.discounts_title": "Discounts and gifts",
    "explain.discounts_desc":
      "With the help of points you will receive discounts or special gifts.",
    "explain.tourism_title": "Tourism services",
    "explain.tourism_desc":
      "You can use points at some partner hotels or tourism services.",
    "explain.l_package":
      "L Package: If you activate the <strong>L Package</strong>, the standard discount can be increased by an additional <strong>+10%</strong> (maximum 50%).",
    "explain.check_balance": "How to check the number of points?",
    "explain.mobile_bank":
      '<strong>Mobile banking:</strong> Open the Bank of Georgia mobile banking application and see the "Plus points" section.',
    "explain.internet_bank":
      "<strong>Internet banking:</strong> You can also view accumulated points in your online profile.",
    "explain.call_center":
      "<strong>Call center:</strong> Call the bank's hotline for any questions.",
    "explain.partners_title": "Partner companies",
    "explain.partners_desc":
      "The partner list changes periodically — see the latest and complete information on the Bank of Georgia's official website or mobile banking.",

    // Recent transactions
    "recent.title": "Recent Transactions",
    "recent.hint": "* Dispute/verification – 24/7",

    // Contact
    "about.who": "Who we are?",
    "about.admin":
      "Site administrator. This is the third year that I have been awarding PLUS points to customers and I have decided to automate this process. In case of any problems, you can contact me.",
    "contact.title": "Contact",
    "contact.name": "Karlo Tevzadze (ID: 37001056274)",
    "contact.phone": "T: 597 11 81 75 (Whatsapp, Viber)",

    // Partners
    "partners.title": "Partner Businesses",
    "partners.description":
      'The partner list changes periodically — see the latest and complete information on the Bank of Georgia\'s <a href="https://bankofgeorgia.ge/ka/retail/baratebi/plus-barati#partners" target="_blank">official website</a>',
    "partners.link": "official website",

    // Online indicator
    "online.indicator": "Available 24/7",

    // Modal content
    "modal.photo_title": "Photo instruction",
    "modal.step1_title": "Step I - Main page",
    "modal.step2_title": "Step II - PLUS Points Page",
    "modal.step3_title": "Step III - PLUS Points Transfer Page",
    "modal.step4_title": "Step IV - Final Step: Transfer",
    "modal.step1_text1": "1. Open the Bank of Georgia application",
    "modal.step1_text2":
      '2. On the main page you will notice <strong>"PLUS points"</strong> below loyalty at the arrow-marked location and click.',
    "modal.step2_text1":
      '1. Click the arrow-marked <strong>"Transfer"</strong> button',
    "modal.step3_text1":
      '1. Click the arrow-marked field <strong>"Recipient\'s personal number"</strong> and enter the given personal number:',
    "modal.step3_text2":
      "2. After entering the personal number, the recipient's name will automatically fill with initials <strong>K.T. (Karlo Tevzadze)</strong>",
    "modal.step3_text3":
      "3. In the PLUS points field you should write how many points you want to transfer",
    "modal.step3_text4":
      '4. In the comment you can specify anything, for example: <strong>"Personal transfer"</strong>',
    "modal.step4_text1":
      '1. If you have filled everything according to the instructions, click <strong>"Transfer"</strong> and wait for confirmation.',
    "modal.step4_text2":
      "2. If due to a technical error the amount is not automatically credited within 1 minute of transfer, in 99% of cases this will not happen, but if it does, don't worry, write to us at any time on any contact channel and we will solve the problem immediately and manually credit you.",
    "modal.step4_text3": "<strong>3. Contact methods:</strong>",
    "modal.contact_phone": "T: 597 11 81 75 (Whatsapp, Viber)",

    // WhatsApp section
    "wa.message":
      'Hello! Write us a question and click "Send" — we\'ll open WhatsApp with a prepared text.',
    "wa.placeholder": "Hello, I have a question...",
    "wa.send": "Send",

    // Online indicator
    "online.indicator": "Available 24/7",
  },
};

// Function to load text content dynamically
function loadTextContent(language = "ka") {
  const currentTexts = translations[language] || translations["ka"];

  // Load all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    const text = currentTexts[key];
    if (text) {
      element.innerHTML = text;
    }
  });

  // Load all elements with data-translate-placeholder attribute
  document
    .querySelectorAll("[data-translate-placeholder]")
    .forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder");
      const text = currentTexts[key];
      if (text) {
        element.placeholder = text;
      }
    });

  // Load all elements with data-translate-title attribute
  document.querySelectorAll("[data-translate-title]").forEach((element) => {
    const key = element.getAttribute("data-translate-title");
    const text = currentTexts[key];
    if (text) {
      element.title = text;
    }
  });
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { translations, loadTextContent };
}

let currentLanguage = "ka"; // Start with Georgian

// Language toggle function
function toggleLanguage() {
  console.log("Toggling language...");

  // Switch language
  currentLanguage = currentLanguage === "ka" ? "en" : "ka";

  // Update flag image
  const flagImage = document.getElementById("flagImage");
  if (flagImage) {
    if (currentLanguage === "en") {
      flagImage.src = "img/georgia_5111838.webp";
      flagImage.alt = "English Language";
    } else {
      flagImage.src = "img/united-kingdom_206592.webp";
      flagImage.alt = "ქართული ენა";
    }
  }

  // Load text content from external file
  loadTextContent(currentLanguage);

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;

  console.log("Language switched to:", currentLanguage);
}

// Initialize language toggle and load initial content
window.addEventListener("load", function () {
  console.log("Setting up language toggle...");

  // Load initial content
  loadTextContent(currentLanguage);

  const languageToggle = document.getElementById("languageToggle");

  if (languageToggle) {
    // Add click event to flag
    languageToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleLanguage();
    });

    // Add cursor pointer style
    languageToggle.style.cursor = "pointer";

    console.log("Language toggle ready!");
  }
});
