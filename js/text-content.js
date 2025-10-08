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
    "calc.receive_value": "მიიღეთ ღირებულების 110% თითოეულ გაცვლაზე",
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
      "თანხა მომენტალურად აგესახებათ გადმომრიცხავის პირად ანგარიშზე.",
    "faq.rate": "რა არის კურსი?",
    "faq.rate_answer":
      "ბაზრის მიხედვით იცვლება. საწყისი მაგალითი: 400 Plus = 1.10 ₾. რეალური კურსი ჩანს კალკულატორში.",

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
    "calc.receive_value": "Receive 110% of the value for each exchange",
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
      "The amount will be instantly credited to the transferor's personal account.",
    "faq.rate": "What is the rate?",
    "faq.rate_answer":
      "Varies depending on the market. Initial example: 400 Plus = 1.10 ₾. The actual rate is shown in the calculator.",
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

// Advanced SEO Optimization System for Plusqulebi
// Professional-grade SEO implementation for first-page Google rankings

const seoContent = {
  ka: {
    // Primary SEO Content
    title: "PLUS ქულების გაცვლა ლარში | იყიდე და გაყიდე PLUS ქულები - Plusqulebi.ge",
    description: "გადაცვალე საქართველოს ბანკის PLUS ქულები მომენტალურად ლარში. 24/7 მხარდაჭერა, საუკეთესო კურსი, უსაფრთხო ტრანზაქციები. Plusqulebi.ge - შენი სანდო პარტნიორი.",
    keywords: "PLUS ქულები, პლიუს ქულები, Bank of Georgia, ქულების გაყიდვა, ქულების ყიდვა, ლოიალობის პროგრამა, ბონუს ქულები, ლარი, გაცვლა, საქართველო, ბანკი, ფინანსები, ფული, გადახდა, ტრანზაქცია",
    
    // Author and Copyright
    author: "კარლო თევზაძე",
    copyright: "© 2025 Plusqulebi. ყველა უფლება დაცულია.",
    
    // Open Graph Content
    ogTitle: "PLUS ქულების გაცვლა ლარში | Plusqulebi.ge",
    ogDescription: "გადაცვალე საქართველოს ბანკის PLUS ქულები მომენტალურად ლარში. 24/7 მხარდაჭერა, საუკეთესო კურსი, უსაფრთხო ტრანზაქციები.",
    ogSiteName: "Plusqulebi",
    ogType: "website",
    ogLocale: "ka_GE",
    
    // Twitter Cards
    twitterTitle: "PLUS ქულების გაცვლა ლარში | Plusqulebi.ge",
    twitterDescription: "გადაცვალე საქართველოს ბანკის PLUS ქულები მომენტალურად ლარში. საუკეთესო კურსი, 24/7 მხარდაჭერა.",
    twitterCard: "summary_large_image",
    twitterSite: "@plusqulebi",
    twitterCreator: "@karlotevzadze",
    
    // Additional SEO Meta Tags
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    bingbot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Language and Region
    language: "ka",
    region: "GE",
    geoRegion: "GE",
    geoCountry: "Georgia",
    
    // Business Information
    businessName: "Plusqulebi",
    businessType: "Financial Services",
    serviceArea: "Georgia",
    contactPhone: "+995597118175",
    
    // Content Categories
    category: "Financial Services",
    subcategory: "Banking and Finance",
    industry: "Fintech"
  },
  
  en: {
    // Primary SEO Content
    title: "Exchange PLUS Points for Lari | Buy and Sell PLUS Points - Plusqulebi.ge",
    description: "Exchange Bank of Georgia PLUS points instantly for Lari. 24/7 support, best rates, secure transactions. Plusqulebi.ge - your trusted partner for point exchange.",
    keywords: "PLUS points, Bank of Georgia, points exchange, loyalty program, bonus points, Lari, Georgia, exchange points, sell points, buy points, banking, finance, fintech, money, payment, transaction, Tbilisi",
    
    // Author and Copyright
    author: "Karlo Tevzadze",
    copyright: "© 2025 Plusqulebi. All rights reserved.",
    
    // Open Graph Content
    ogTitle: "Exchange PLUS Points for Lari | Plusqulebi.ge",
    ogDescription: "Exchange Bank of Georgia PLUS points instantly for Lari. 24/7 support, best rates, secure transactions.",
    ogSiteName: "Plusqulebi",
    ogType: "website",
    ogLocale: "en_US",
    
    // Twitter Cards
    twitterTitle: "Exchange PLUS Points for Lari | Plusqulebi.ge",
    twitterDescription: "Exchange Bank of Georgia PLUS points instantly for Lari. Best rates, 24/7 support, secure transactions.",
    twitterCard: "summary_large_image",
    twitterSite: "@plusqulebi",
    twitterCreator: "@karlotevzadze",
    
    // Additional SEO Meta Tags
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    bingbot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    
    // Language and Region
    language: "en",
    region: "US",
    geoRegion: "GE",
    geoCountry: "Georgia",
    
    // Business Information
    businessName: "Plusqulebi",
    businessType: "Financial Services",
    serviceArea: "Georgia",
    contactPhone: "+995597118175",
    
    // Content Categories
    category: "Financial Services",
    subcategory: "Banking and Finance",
    industry: "Fintech"
  }
};

// Advanced SEO Meta Tags Generator
function generateAdvancedMetaTags(language = "ka") {
  const content = seoContent[language] || seoContent["ka"];
  
  return {
    // Basic Meta Tags
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    author: content.author,
    copyright: content.copyright,
    robots: content.robots,
    googlebot: content.googlebot,
    bingbot: content.bingbot,
    
    // Language and Region
    language: content.language,
    region: content.region,
    'geo.region': content.geoRegion,
    'geo.country': content.geoCountry,
    
    // Open Graph
    'og:title': content.ogTitle,
    'og:description': content.ogDescription,
    'og:site_name': content.ogSiteName,
    'og:type': content.ogType,
    'og:locale': content.ogLocale,
    'og:url': 'https://plusqulebi.ge/',
    'og:image': 'https://plusqulebi.ge/img/banner.webp',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': content.ogTitle,
    
    // Twitter Cards
    'twitter:card': content.twitterCard,
    'twitter:site': content.twitterSite,
    'twitter:creator': content.twitterCreator,
    'twitter:title': content.twitterTitle,
    'twitter:description': content.twitterDescription,
    'twitter:image': 'https://plusqulebi.ge/img/banner.webp',
    'twitter:image:alt': content.twitterTitle,
    
    // Additional SEO
    'theme-color': '#1C2331',
    'msapplication-TileColor': '#1C2331',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    
    // Business Information
    'business:contact_data:locality': 'Tbilisi',
    'business:contact_data:region': 'Georgia',
    'business:contact_data:country_name': 'Georgia',
    'business:contact_data:phone_number': content.contactPhone,
    
    // Content Classification
    'article:author': content.author,
    'article:section': content.category,
    'article:tag': content.keywords.split(', ').slice(0, 5).join(', '),
    
    // Mobile Optimization
    'mobile-web-app-capable': 'yes',
    'apple-touch-fullscreen': 'yes',
    'apple-mobile-web-app-title': 'Plusqulebi',
    
    // Security
    'referrer': 'no-referrer-when-downgrade',
    'x-ua-compatible': 'IE=edge',
    
    // Performance
    'dns-prefetch': '//fonts.googleapis.com',
    'preconnect': 'https://plusqulebi.ge',
    'preload': 'img/banner.webp'
  };
}

// Update Head Content with Advanced SEO
function updateAdvancedHeadContent(language = "ka") {
  const metaTags = generateAdvancedMetaTags(language);
  
  // Update title
  document.title = metaTags.title;
  
  // Update or create meta tags
  Object.keys(metaTags).forEach(key => {
    if (key === 'title') return; // Already handled above
    
    let selector, attribute, value;
    
    if (key.startsWith('og:')) {
      selector = `meta[property="${key}"]`;
      attribute = 'content';
    } else if (key.startsWith('twitter:')) {
      selector = `meta[name="${key}"]`;
      attribute = 'content';
    } else if (key.startsWith('business:')) {
      selector = `meta[name="${key}"]`;
      attribute = 'content';
    } else if (key.startsWith('article:')) {
      selector = `meta[property="${key}"]`;
      attribute = 'content';
    } else {
      selector = `meta[name="${key}"]`;
      attribute = 'content';
    }
    
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (key.startsWith('og:') || key.startsWith('article:')) {
        element.setAttribute('property', key);
      } else {
        element.setAttribute('name', key);
      }
      document.head.appendChild(element);
    }
    
    element.setAttribute(attribute, metaTags[key]);
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = language;
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = `https://plusqulebi.ge/${language === 'en' ? '?lang=en' : ''}`;
  if (!document.querySelector('link[rel="canonical"]')) {
    document.head.appendChild(canonical);
  }
}

// Add Hreflang Tags for International SEO
function addHreflangTags() {
  // Remove existing hreflang tags
  const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflang.forEach(tag => tag.remove());
  
  const hreflangTags = [
    { hreflang: 'ka', href: 'https://plusqulebi.ge/' },
    { hreflang: 'en', href: 'https://plusqulebi.ge/?lang=en' },
    { hreflang: 'x-default', href: 'https://plusqulebi.ge/' }
  ];
  
  hreflangTags.forEach(tag => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = tag.hreflang;
    link.href = tag.href;
    document.head.appendChild(link);
  });
}

// Generate Advanced Structured Data
function generateStructuredData(language = "ka") {
  const content = seoContent[language] || seoContent["ka"];
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://plusqulebi.ge/#website",
        "url": "https://plusqulebi.ge/",
        "name": "Plusqulebi",
        "description": content.description,
        "inLanguage": language,
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://plusqulebi.ge/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://plusqulebi.ge/#organization",
        "name": content.businessName,
        "url": "https://plusqulebi.ge/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://plusqulebi.ge/img/plusqulebi2.webp",
          "width": 200,
          "height": 200
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": content.contactPhone,
          "contactType": "customer service",
          "availableLanguage": [language === "ka" ? "Georgian" : "English"]
        },
        "sameAs": [
          "https://www.facebook.com/karlo.tevzadze/",
          "https://www.linkedin.com/in/karlo-tevzadze-b301b0175/",
          "https://t.me/bitcoin_dca_with_karl",
          "https://www.instagram.com/bitcoindcawithkarl",
          "https://www.youtube.com/@BitcoinDCAwithKarl"
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://plusqulebi.ge/#service",
        "name": "PLUS Points Exchange Service",
        "description": content.description,
        "provider": {
          "@id": "https://plusqulebi.ge/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Georgia"
        },
        "serviceType": "Point Exchange",
        "category": "Financial Services"
      },
      {
        "@type": "WebPage",
        "@id": "https://plusqulebi.ge/#webpage",
        "url": "https://plusqulebi.ge/",
        "name": content.title,
        "isPartOf": {
          "@id": "https://plusqulebi.ge/#website"
        },
        "about": {
          "@id": "https://plusqulebi.ge/#service"
        },
        "description": content.description,
        "inLanguage": language,
        "datePublished": "2025-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString()
      }
    ]
  };
  
  return structuredData;
}

// Add Structured Data to Head
function addStructuredData(language = "ka") {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());
  
  const structuredData = generateStructuredData(language);
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData, null, 2);
  document.head.appendChild(script);
}

// Add Performance and Security Headers
function addPerformanceHeaders() {
  // Preload critical resources
  const preloads = [
    { href: 'css/style.css', as: 'style' },
    { href: 'css/fonts.css', as: 'style' },
    { href: 'img/banner.webp', as: 'image' },
    { href: 'img/plusqulebi2.webp', as: 'image' }
  ];
  
  preloads.forEach(preload => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = preload.href;
    link.as = preload.as;
    if (preload.as === 'style') {
      link.onload = function() { this.rel = 'stylesheet'; };
    }
    document.head.appendChild(link);
  });
  
  // DNS prefetch for external resources
  const dnsPrefetch = [
    '//fonts.googleapis.com',
    '//www.google-analytics.com',
    '//www.googletagmanager.com'
  ];
  
  dnsPrefetch.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
}

// Initialize Advanced SEO
function initializeAdvancedSEO() {
  // Get language from URL parameter or default to Georgian
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang');
  const initialLanguage = (langFromUrl === 'en') ? 'en' : 'ka';
  
  // Update head content
  updateAdvancedHeadContent(initialLanguage);
  
  // Add hreflang tags
  addHreflangTags();
  
  // Add structured data
  addStructuredData(initialLanguage);
  
  // Add performance headers
  addPerformanceHeaders();
  
  return initialLanguage;
}

// Export functions
if (typeof module !== "undefined" && module.exports) {
  module.exports = { 
    seoContent, 
    updateAdvancedHeadContent, 
    addHreflangTags, 
    addStructuredData, 
    addPerformanceHeaders,
    initializeAdvancedSEO 
  };
}

const rate = { plus: 400, gel: 1.1 }; // editable baseline
const rateText = document.getElementById("rateText");
const plusAmount = document.getElementById("plusAmount");
const gelAmount = document.getElementById("gelAmount");
const tabBuy = document.getElementById("tab-buy");
const tabSell = document.getElementById("tab-sell");
const profileIdEl = document.getElementById("profileId");
const copyId = document.getElementById("copyId");
const copyId2 = document.getElementById("copyId2");
plusAmount.value = 400;

function fmt(n) {
  return new Intl.NumberFormat("ka-GE", {
    maximumFractionDigits: 2,
  }).format(n);
}

function updateRateText() {
  rateText.textContent = `${rate.plus} Plus → ${rate.gel.toFixed(2)} ₾`;
}

function calculate() {
  const p = Number(plusAmount.value || 0);
  const pricePerPlus = rate.gel / rate.plus; // ₾ per point
  const gel = p * pricePerPlus;
  gelAmount.value = `${fmt(gel)} ₾`;
}

function setMode(mode) {
  const isBuy = mode === "buy";
  tabBuy.classList.toggle("active", isBuy);
  tabSell.classList.toggle("active", !isBuy);
  document.title = `PLUS ქულები • ${isBuy ? "გაყიდვა" : "ყიდვა"} PLUS ქულების`;
}

plusAmount.addEventListener("input", calculate);
tabBuy.addEventListener("click", () => setMode("buy"));
tabSell.addEventListener("click", () => setMode("sell"));
copyId.addEventListener("click", () => {
  navigator.clipboard.writeText(profileIdEl.textContent.trim());
  copyId.style.borderColor = "var(--brand)";
  copyId.title = "დაკოპირებულია";
  setTimeout(() => (copyId.style.borderColor = "rgba(255,255,255,.14)"), 900);
});
copyId2.addEventListener("click", () => {
  navigator.clipboard.writeText(profileIdEl.textContent.trim());
  copyId2.style.borderColor = "var(--brand)";
  copyId2.title = "დაკოპირებულია";
  setTimeout(() => (copyId2.style.borderColor = "rgba(255,255,255,.14)"), 900);
});

// mock trades
var trades = []
fetch("lastTrans.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse JSON
  })
  .then(data => {
    trades = data
    
  const list = document.getElementById("trades");
  trades.forEach((t) => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `<div><strong>${t.name}</strong><div class="muted">${
      t.time
    }</div></div>
                        <div><div class="muted">PLUS ქულა:</div><strong>${fmt(
                          t.plus
                        )}</strong></div>
                        <div><div class="muted">₾ თანხა:</div><strong>${fmt(
                          t.gel
                        )} ₾</strong></div>`;
    list.appendChild(el);
  });
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// stats
document.getElementById("statDeals").textContent = trades.length;
document.getElementById("statPoints").textContent = fmt(
  trades.reduce((a, b) => a + b.plus, 0)
);

// misc
updateRateText();

calculate();
document.getElementById("y").textContent = new Date().getFullYear();
