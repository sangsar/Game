const story = {

    scene1: {
        location: 'جادهٔ ۱۷ — غروب — بارون ریز',
        text: 'بیسیم ماشین گشت روشن میشه: «جسد زن کنار جادهٔ ۱۷. یونیت ۴ برین ببینین.» الن رانندگی می‌کنه. ۶ ماهه به نورثبروک اومدی. بارون ریز و سرد می‌باره. بوی خاک نم‌خورده و کاج از پنجرهٔ باز میاد تو.',
        dialogue: 'می‌رسین به جادهٔ خاکی. زن ۲۵-۳۰ ساله روی علف‌های خیس افتاده. چشم‌ها باز. بارون رو صورتش می‌باره. کبودی دور گردن. طناب نیست. الن چمباتمه می‌زنه، چراغ‌قوه رو می‌گیره رو صورتش: «خفه شده. طناب رو با خودش برده. اینو ببین...» یه صلیب چوبی کوچیک تو دهنشه.',
        choices: [
            { label: '۱. صلیب رو با دستمال برمی‌دارم، دقیق بررسی می‌کنم.', clue: 'صلیب چوبی دست‌ساز', next: 'scene2' },
            { label: '۲. از الن می‌پرسم: «تو ۱۸ سال سابقت، همچین چیزی دیدی؟»', trust: 1, next: 'scene2_alt' }
        ]
    },

    scene2: {
        location: 'جادهٔ ۱۷ — شب — بارون',
        text: 'صلیب رو با دستمال برمی‌داری. چوب کاج. سبک. روش خراش‌های ریزی هست. با چاقو کنده‌کاری شده. بوی بارون و خاک میده. پشتش یه لکهٔ قهوه‌ای خشکیده هست.',
        dialogue: 'الن از روی شونه‌ت نگاه می‌کنه: «انگار تازه‌س. کی صلیب می‌ذاره تو دهن جسد؟ این یه امضاست. امضای یه آدم مریض.»',
        choices: [
            { label: '۱. صلیب رو به الن می‌دم. می‌گم بذار تو پرونده.', next: 'scene3_lab' },
            { label: '۲. صلیب رو می‌ذارم تو جیبم. می‌خوام خودم بررسیش کنم.', stress: 1, next: 'scene3_pocket' }
        ]
    },

    scene2_alt: {
        location: 'جادهٔ ۱۷ — شب — بارون',
        text: 'از الن می‌پرسی. نگاهش رو صلیب قفل شده. بارون محکم‌تر می‌باره.',
        dialogue: 'الن سر تکون می‌ده: «نه. ۱۸ ساله اینجام. جنازه زیاد دیدم. اما هیچ‌کس صلیب نذاشته بود تو دهنشون. این یه پیامه جیمی.»',
        choices: [
            { label: '۱. «پس ببینیم چی می‌خواد بگه.» صلیب رو برمی‌دارم.', clue: 'صلیب چوبی دست‌ساز', next: 'scene3_lab' },
            { label: '۲. «شاید یه مریض بوده.» بی‌خیال صلیب می‌شیم.', next: 'scene3_ignore' }
        ]
    },

    scene3_lab: {
        location: 'کلانتری — ۳ روز بعد — عصر',
        text: 'سه روز از قتل گذشته. پرونده بازه ولی سرنخی نیست. یه پاکت نامه رسیده به کلانتری. کاغذ سفید ساده. خط فشرده و نامرتب. خودکار آبی.',
        dialogue: 'نامه رو باز می‌کنی. نامه: «جهنم نزدیکه. همه شما قراره برده‌های من بشین. تا ابد. راه فراری برای هیچ‌کس نیست. من پسر شیطانم. اسب مزرعم بهم می‌گه باید همتونو بکشم.» الن: «این یه مریضه... یا یه بازیگر.»',
        choices: [
            { label: '۱. «باید تو مزرعه‌ها رو بگردیم. قاتل از اسب مزرعه گفته.»', time: 3, next: 'scene4_farm' },
            { label: '۲. «این آدم بیمار روانیه. ببریمش پیش روان‌پزشک جنایی.»', stress: 1, next: 'scene4_psych' },
            { label: '۳. «این نامه شاید مال قاتل نباشه. یکی دیگه‌ست.»', next: 'scene4_magnus' }
        ]
    },

    scene3_pocket: {
        location: 'خانهٔ جیمی — نیمه‌شب — بارون',
        text: 'صلیب رو گذاشتی تو جیبت. شب تو خونه زیر نور چراغ مطالعه نگاهش می‌کنی. خراش‌های روش نامنظم.',
        dialogue: 'سه روز بعد. الن زنگ می‌زنه: «جیمی، یه نامه رسیده.» می‌ری کلانتری. نامه: «جهنم نزدیکه. همه شما قراره برده‌های من بشین. من پسر شیطانم. اسب مزرعم بهم می‌گه باید همتونو بکشم.»',
        choices: [
            { label: '۱. «باید تو مزرعه‌ها رو بگردیم.»', time: 3, next: 'scene4_farm' },
            { label: '۲. «این آدم بیمار روانیه.»', stress: 1, next: 'scene4_psych' },
            { label: '۳. «این نامه شاید مال قاتل نباشه.»', next: 'scene4_magnus' }
        ]
    },

    scene3_ignore: {
        location: 'کلانتری — ۳ روز بعد — عصر',
        text: 'بی‌خیال صلیب شدی. تیم جنایی اومد. جنازه رو بردن. یه پاکت نامه رسیده.',
        dialogue: 'الن پاکت رو می‌ذاره رو میزت: «نامه رو گذاشتن دم در.» نامه: «جهنم نزدیکه. همه شما قراره برده‌های من بشین. من پسر شیطانم. اسب مزرعم بهم می‌گه باید همتونو بکشم.»',
        choices: [
            { label: '۱. «باید تو مزرعه‌ها رو بگردیم.»', time: 3, next: 'scene4_farm' },
            { label: '۲. «این آدم بیمار روانیه.»', stress: 1, next: 'scene4_psych' },
            { label: '۳. «این نامه شاید مال قاتل نباشه.»', next: 'scene4_magnus' }
        ]
    },

    scene4_farm: {
        location: 'مزارع اطراف نورثبروک — ۳ روز بعد — عصر',
        text: 'سه روز مزارع رو گشتی. هیچی پیدا نمی‌کنی. ولی تو راه یه کامیون پارک شده می‌بینی.',
        dialogue: 'الن پیاده می‌شه: «این وین استپلتونه. ۲۵ ساله تو این جاده‌هاست. می‌گه فقط استراحت می‌کرده.»',
        choices: [
            { label: '۱. از وین بازجویی می‌کنم.', next: 'scene5_vin' },
            { label: '۲. اسمش رو یادداشت می‌کنم.', clue: 'وین استپلتون — مظنون', next: 'scene5_next' }
        ]
    },

    scene4_psych: {
        location: 'مطب روان‌پزشک — ۲ روز بعد — صبح',
        text: 'نامه رو بردی پیش دکتر میسون. مردی با عینک ته‌استکانی.',
        dialogue: 'دکتر: «نویسنده مرده. ۲۵-۴۰ سال. از مذهب متنفره. شغلش جابجایی زیاد داره. خشونت علیه زنان.» الن: «این با ۲۰۰ نفر تو شهر جور درمیاد.»',
        choices: [
            { label: '۱. می‌رم سراغ لیست راننده‌ها.', next: 'scene5_drivers' },
            { label: '۲. «وقت تلف کردیم.» برمی‌گردم.', stress: 2, next: 'scene5_next' }
        ]
    },

    scene4_magnus: {
        location: 'کلانتری — اتاق بازجویی — شب',
        text: 'مگنوس رو آوردن. دست‌هاش میلرزه. بوی عرق و خیابون می‌ده.',
        dialogue: 'مگنوس: «قسم می‌خورم! یه نفر بهم پول داد. ۵۰ دلار. ماسک داشت. گفت ببر کلانتری بده به یه مأمور. من فقط واسه پول مواد این کارو کردم.»',
        choices: [
            { label: '۱. حرفش رو باور می‌کنم. آزادش می‌کنم.', trust: 1, guilt: 1, magnusFree: true, next: 'scene5_free' },
            { label: '۲. حرفش رو باور نمی‌کنم. می‌ندازمش حبس.', magnusFree: false, next: 'scene5_jail' }
        ]
    },

    scene5_free: {
        location: 'جادهٔ ۹ — چند روز بعد — غروب',
        text: 'مگنوس رو آزاد کردی. الن گفت شاید اشتباه کردیم.',
        dialogue: 'بیسیم: «جسد زن دیگه‌ای پیدا شده. جادهٔ ۹. طناب دور گردن.» قاتل داره پیشروی می‌کنه. الن: «فکر نکن جیمی. خودت رو سرزنش نکن.»',
        choices: [{ label: 'ادامه...', next: 'scene6_drivers' }]
    },

    scene5_jail: {
        location: 'کلانتری',
        text: 'مگنوس ۳ ماه می‌ره زندان. بی‌گناه.',
        dialogue: 'الن یه لیوان قهوه می‌ذاره جلوت: «شاید اشتباه کردیم. شایدم نکردیم.»',
        choices: [{ label: 'ادامه...', next: 'scene6_drivers' }]
    },

    scene5_vin: {
        location: 'مزرعهٔ متروکه — عصر',
        text: 'از وین می‌پرسی. آروم جواب می‌ده. سیگارش رو روشن می‌کنه.',
        dialogue: 'وین: «گفتم که. استراحت. ۲۵ ساله این جاده‌ها رو می‌رم. مگه جرمه؟» کامیونش تمیزه. خیلی تمیز.',
        choices: [{ label: 'ادامه...', next: 'scene6_drivers' }]
    },

    scene5_drivers: {
        location: 'کلانتری — صبح روز بعد',
        text: 'لیست راننده‌های کامیون شهر رو میاری. ۴۲ نفرن. سه تاشون سابقه دارن.',
        dialogue: 'الن: «وین استپلتون، مایکل تالبوت، و... توماس هیل.»',
        choices: [{ label: 'ادامه...', next: 'scene6_drivers' }]
    },

    scene5_next: {
        location: 'کلانتری — شب — بارون',
        text: 'برمی‌گردی کلانتری. دست خالی. حس می‌کنی داری دور خودت می‌چرخی.',
        dialogue: 'الن میاد کنارت: «چیزی پیدا نکردیم. ولی این قاتل دوباره می‌زنه.»',
        choices: [{ label: 'ادامه...', next: 'scene6_drivers' }]
    },

    scene6_drivers: {
        location: 'نورثبروک — عصر',
        text: 'چند هفته گذشته. ۳ تا اسم داری: وین استپلتون، مایکل تالبوت، توماس هیل. شهر هنوز آرومه. مردم هنوز درهاشون رو قفل نمی‌کنن.',
        dialogue: 'الن: «وین رو که دیدیم. مایکل راننده شرکت رقیبه. توماس هیل... ۳۰ سالشه. موهاش مشکیه. چهره‌ش معمولیه. همیشه سر به زیر. ۸ سال پیش یه دختر شکایت کرد. بعدش پس گرفت.»',
        choices: [
            { label: '۱. بریم سراغ توماس هیل. اون سابقه داره.', next: 'scene7_thomas' },
            { label: '۲. کامیون وین بوی وایتکس میداد. یه چیزی رو پاک می‌کنه.', next: 'scene7_vin' },
            { label: '۳. زن مایکل گفته شب حادثه یهو از خونه زده بیرون.', next: 'scene7_michael' }
        ]
    },

    scene7_thomas: {
        location: 'خانهٔ توماس هیل — محلهٔ فقیرنشین — عصر',
        text: 'می‌ری خونه‌ش. خونهٔ سیمانی خاکستری با حصار چوبی. همسرش در رو باز می‌کنه. زنی خسته با چشمای بی‌فروغ.',
        dialogue: 'زنش: «شوهرم اون شب خونه بود. پیش من و بچه‌ها.» در رو می‌بنده. همسایه: «توماس پسر خوبیه. بی‌آزاره. برف پارسال رو برام پارو کرد.»',
        choices: [{ label: 'ادامه...', next: 'scene8_suspects' }]
    },

    scene7_vin: {
        location: 'پایانهٔ کامیون‌ها — عصر',
        text: 'برمی‌گردی پایانه. بوی تند وایتکس. یه جعبه طناب گوشه کامیونش.',
        dialogue: 'وین: «ضدعفونی می‌کنم. وسواس دارم. طناب مال بارگیریه. همه راننده‌ها طناب دارن.» ولی بوش خیلی زیاده.',
        choices: [{ label: 'ادامه...', next: 'scene8_suspects' }]
    },

    scene7_michael: {
        location: 'خانهٔ مایکل تالبوت — عصر',
        text: 'می‌ری خونه‌ش. زنش دم در وایساده. دستاش میلرزه.',
        dialogue: 'زنش: «شب حادثه یهو زد بیرون. صبح برگشت. لباساش گِلی بود. نمی‌تونم بگم کجا بود.»',
        choices: [{ label: 'ادامه...', next: 'scene8_suspects' }]
    },

    scene8_suspects: {
        location: 'کلانتری — شب — بارون',
        text: 'سه تا مظنون. هیچ‌کدوم مدرک قطعی ندارن. ساعت ۱۱ شبه.',
        dialogue: 'الن: «کدومشونه جیمی؟ وین با اون بوی وایتکسش؟ مایکل با اون رفتار مشکوکش؟ یا توماس با اون سابقه‌ش؟»',
        choices: [
            { label: '۱. وین رو برای بازجویی میارم.', next: 'scene9_vin_arrest' },
            { label: '۲. مایکل رو برای بازجویی میارم.', next: 'scene9_michael_inter' },
            { label: '۳. هر سه رو ول می‌کنم. مدرک ندارم.', guilt: 2, stress: 2, next: 'scene9_letgo' }
        ]
    },

    scene9_vin_arrest: {
        location: 'کلانتری — اتاق بازجویی — شب',
        text: 'وین رو آوردی. عصبیه. عرق می‌ریزه.',
        dialogue: 'وین: «من قاتل نیستم!» الن: «مدرکی علیهش نداریم جیمی.»',
        choices: [
            { label: '۱. می‌ندازمش حبس.', next: 'scene10_vin_jailed' },
            { label: '۲. ولش می‌کنم.', trust: 1, next: 'scene10_vin_free' }
        ]
    },

    scene9_michael_inter: {
        location: 'اتاق بازجویی — شب',
        text: 'مایکل رو میاری. آروم میشینه.',
        dialogue: 'مایکل: «با یه زن دیگه بودم. به زنم خیانت کردم. برای همین نمی‌تونستم بگم.»',
        choices: [{ label: 'ادامه...', next: 'scene11_bodies' }]
    },

    scene9_letgo: {
        location: 'خانهٔ جیمی — نیمه‌شب — بارون',
        text: 'هر سه رو ول کردی. برمی‌گردی خونه. باندی (سگت) میاد جلو در.',
        dialogue: 'بیسیم: «دو جسد پیدا شده. جادهٔ ۲۳. خواهر.» دیر شده. قاتل دوباره زده.',
        choices: [{ label: 'ادامه...', next: 'scene11_bodies' }]
    },

    scene10_vin_jailed: {
        location: 'کلانتری — چند روز بعد',
        text: 'وین می‌ره بازداشت. روزنامه تیتر می‌زنه. جسد دوم و سوم پیدا می‌شن. وین تو بازداشته. بی‌گناهه.',
        dialogue: 'وین آزاد می‌شه. شرکت اخراجش کرده. بچه‌هاش کتک می‌خورن. الن: «ما زندگیش رو نابود کردیم.»',
        choices: [
            { label: '۱. «اشتباه کردیم؟»', guilt: 1, trust: 1, next: 'scene11_bodies' },
            { label: '۲. «همه چی بر علیهش بود.»', stress: 1, trust: -1, next: 'scene11_bodies' },
            { label: '۳. «باید بیشتر مراقب باشیم.»', guilt: 1, lockArrest: true, next: 'scene11_bodies' }
        ]
    },

    scene10_vin_free: {
        location: 'کلانتری — شب',
        text: 'وین رو ول می‌کنی. می‌ره.',
        dialogue: 'الن: «تصمیم درستی بود.» ولی یه فکر ته ذهنت هست: «اگه واقعاً اون باشه چی؟»',
        choices: [{ label: 'ادامه...', next: 'scene11_bodies' }]
    },

        scene11_bodies: {
        location: 'جادهٔ ۲۳ — صبح — مه غلیظ',
        text: 'صبح زود. مه غلیظ مثل شیر. یه شکارچی با کلانتری تماس می‌گیره. دو تا جسد. دو تا دختر جوون. خواهر. با فاصله دو متر از هم افتادن. طناب دور گردن هر دو. کبودی. بدون صلیب. دست‌هاشون با بند پلاستیکی مشکی بسته شده. علف‌های اطراف لگد شده.',
        dialogue: 'الن کنار اجساد چمباتمه می‌زنه: «هر دو هم‌زمان خفه شدن... اینا ورزشکار بودن. قوی. مبارزه کردن. یه نفر چطور می‌تونه دو تا رو هم‌زمان خفه کنه؟»',
        choices: [
            { label: '۱. «شاید دو تا قاتل داریم. دو نفر که باهم کار می‌کنن.»', time: 2, redHerrings: 1, next: 'scene12_aftermath' },
            { label: '۲. «شاید اول یکی رو گرفت، اون یکی تسلیم شد. خواهرش بود.»', clue: 'بند پلاستیکی', next: 'scene12_aftermath' },
            { label: '۳. «نمی‌دونم. بذار پزشک قانونی جواب بده.»', stress: 1, time: 1, next: 'scene12_aftermath' }
        ]
    },

    scene12_aftermath: {
        location: 'کلانتری — شب',
        text: 'پزشک قانونی جواب داده. بند پلاستیکی دور مچ. طناب ۸ میلی‌متری. اول دستاشون رو بسته، بعد خفه‌شون کرده. یه نفر این کار رو کرده.',
        dialogue: 'الن سه تا فنجون قهوه رو خالی کرده: «حالا ۳ تا جنازه داریم. همه زن. همه طناب. یه الگو هست ولی نمی‌بینیمش.»',
        choices: [
            { label: '۱. «الگو اینه که همه تو جاده پیدا شدن. قاتل راننده‌ست.»', trust: 1, next: 'scene13_letter2' },
            { label: '۲. «الگویی نیست. قاتل فقط می‌کشه. ما کوریم.»', stress: 2, next: 'scene13_letter2' }
        ]
    },

    scene13_letter2: {
        location: 'کلانتری — چند هفته بعد — عصر',
        text: 'چند هفته گذشته. پرونده سرده. یه نامهٔ جدید می‌رسه. کاغذ سفید. خودکار آبی. خط فشرده.',
        dialogue: 'نامه: «ترسو تو چشاش دیدم. خستم. خسته از همه چی. می‌دونی بهشت کجاست؟ همینجا. فقط بدون آدماش. من می‌خوام بهشتو بسازم. شما فقط مزاحمین.» الن: «این داره بدتر می‌شه...»',
        choices: [
            { label: '۱. «این بار اثر انگشت می‌گیریم.»', time: 1, stress: 1, next: 'scene14_emily' },
            { label: '۲. «می‌خواد مارو عصبانی کنه. بریم سراغ راننده‌ها.»', clue: 'توماس هیل — فقط حس', next: 'scene14_emily' },
            { label: '۳. «دوباره از مگنوس بپرسیم.»', next: 'scene13_magnus_check' }
        ]
    },

    scene13_magnus_check: {
        location: '',
        text: '',
        dialogue: '',
        choices: [],
        onLoad: function() {
            if (gameState.magnusFree === true) {
                document.getElementById('location').innerHTML = 'خیابان‌های نورثبروک — شب';
                document.getElementById('sceneText').innerHTML = 'مگنوس رو پیدا می‌کنی پشت یه پمپ‌بنزین متروکه. هنوز می‌ترسه.';
                document.getElementById('dialogue').innerHTML = 'مگنوس: «یادم اومد... ماسکش سیاه بود. بوی بنزین می‌داد. مثل کامیون.»';
                document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene14_emily\')">ادامه...</button>';
                gameState.clues.push('بوی بنزین — کامیون');
            } else if (gameState.magnusFree === false) {
                document.getElementById('location').innerHTML = 'زندان ایالتی — صبح';
                document.getElementById('sceneText').innerHTML = 'می‌ری زندان. نگهبان دم در نگاهت می‌کنه.';
                document.getElementById('dialogue').innerHTML = 'نگهبان: «دیر اومدی. مگنوس دیشب مرد. هم‌سلولیش کشتش. همونی که دوست قربانی اول بود.»';
                document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene14_emily\')">ادامه...</button>';
                gameState.guilt += 3;
                gameState.stress += 3;
            } else {
                document.getElementById('location').innerHTML = 'کلانتری — شب';
                document.getElementById('sceneText').innerHTML = 'مگنوس جایی نیست.';
                document.getElementById('dialogue').innerHTML = 'الن: «ولش کن جیمی. ازش چیزی درنمیاد.»';
                document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene14_emily\')">ادامه...</button>';
            }
        }
    },

    scene14_emily: {
        location: 'کلانتری — شب — بارون',
        text: 'الن با عجله میاد تو. رنگش پریده. دستش میلرزه.',
        dialogue: 'الن: «جیمی... یه دختر دیگه گم شده. امشب. از کتابخونه. اِمیلی کارتر. ۱۴ سالشه.» همهٔ پلیسا واکنش نشون می‌دن. این یکی بچهٔ مردمه. امشب اولین شبیه که مردم درهاشون رو قفل می‌کنن.',
        choices: [
            { label: '۱. می‌رم با خانواده حرف می‌زنم.', next: 'scene15_family' },
            { label: '۲. مسیر کتابخونه تا خونه‌ش رو بررسی می‌کنم.', next: 'scene15_route' },
            { label: '۳. از هم‌مدرس‌ه‌ای‌هاش می‌پرسم.', next: 'scene15_school' }
        ]
    },

    scene15_family: {
        location: 'کلانتری — اتاق انتظار — شب',
        text: 'مادرش گریه می‌کنه. پدرش عصبانیه. مشت می‌کوبه روی میز.',
        dialogue: 'پدر: «یک ماه و نیمه هیچ کاری نکردین! خودم قاتلو پیدا می‌کنم. می‌کشمش.» فرداش رسانه‌ها علیه پلیس می‌شن.',
        choices: [{ label: 'ادامه...', next: 'scene16_emily_found' }],
        onLoad: function() { gameState.stress += 2; gameState.guilt += 1; }
    },

    scene15_route: {
        location: 'مسیر کتابخونه تا خونهٔ کارتر — شب',
        text: 'مسیر رو بررسی می‌کنی. هیچی نیست. فقط یه دوربین مداربستهٔ خراب.',
        dialogue: 'نگهبان: «۳ ماهه کار نمی‌کنه.» وقت تلف کردی.',
        choices: [{ label: 'ادامه...', next: 'scene16_emily_found' }],
        onLoad: function() { gameState.time += 2; gameState.stress += 1; }
    },

    scene15_school: {
        location: 'مدرسهٔ نورثبروک — صبح فردا',
        text: 'دوست اِمیلی با چشمای قرمز و ورم‌کرده. بغض داره.',
        dialogue: 'دوستش: «اِمیلی با یه پسر جوون حرف می‌زد. مو مشکی. سر به زیر. کم‌حرف.» الن: «کیسی مارلو. همون که موقع شروع قتل‌ها فرار کرد. مادر و پدرش رو زد.»',
        choices: [
            { label: '۱. «همه نیرو رو بذاریم دنبال کیسی.»', next: 'scene16_chase' },
            { label: '۲. «کیسی فقط یه پسر فراریه. وقت تلف نکنیم.»', next: 'scene16_emily_found' }
        ]
    },

    scene16_chase: {
        location: 'نورثبروک و اطراف — هفته‌های بعد',
        text: 'همه نیرو می‌ره دنبال کیسی مارلو. جنگل. خونه‌های متروکه. هیچی.',
        dialogue: 'هفته‌ها می‌گذره. نه کیسی پیدا می‌شه، نه اِمیلی. پدر اِمیلی دوباره مصاحبه می‌کنه: «پلیس دنبال یه شبه.»',
        choices: [{ label: 'ادامه...', next: 'scene16_emily_found' }],
        onLoad: function() { gameState.time += 3; gameState.stress += 2; gameState.redHerrings = (gameState.redHerrings || 0) + 1; }
    },

    scene16_emily_found: {
        location: 'جنگل لارچ هالو — صبح — مه',
        text: 'سه روز گذشته. بیسیم: «جسد پیدا شده. جنگل. دختر ۱۴ ساله...» می‌رسی. اِمیلی. طناب نیست. ۱۳ ضربه چاقو. علف‌ها خونی شدن.',
        dialogue: 'الن اشک تو چشماشه: «این فرق می‌کنه... طناب نیست. این شخصیه. این نفرته.»',
        choices: [
            { label: '۱. «این کار قاتل سریالی نیست. این شخصیه.»', next: 'scene17_knife' },
            { label: '۲. «شاید روشش رو عوض کرده. می‌خواد ما رو گیج کنه.»', next: 'scene17_knife' },
            { label: '۳. «۱۳ ضربه... این نفرته. قاتل می‌شناخته‌ش.»', clue: 'قاتل آشنا بوده', next: 'scene17_knife' }
        ]
    },

    scene17_knife: {
        location: 'پزشک قانونی — عصر',
        text: 'پزشک قانونی معاینه رو تموم می‌کنه. یه تیکه پارچهٔ ریز.',
        dialogue: 'پزشک: «زیر ناخن‌هاش پارچه هست. پنبه. ارزون. تی‌شرت کار. مارک والمارت. کلی کارگر و راننده ازش می‌خرن.»',
        choices: [
            { label: '۱. می‌رم والمارت.', next: 'scene18_walmart' },
            { label: '۲. الن می‌ره والمارت. خودم می‌رم پایانه.', next: 'scene18_terminal' },
            { label: '۳. این سرنخ رو بی‌صدا دنبال می‌کنم.', next: 'scene18_quiet' }
        ]
    },

    scene18_walmart: {
        location: 'والمارت نورثبروک — صبح',
        text: 'می‌ری والمارت. فروشنده پیرمرده.',
        dialogue: 'فروشنده: «حکم می‌خواد. حریم خصوصیه.»',
        choices: [{ label: 'ادامه...', next: 'scene32_missing_wife' }],
        onLoad: function() { gameState.time += 2; }
    },

    scene18_terminal: {
        location: 'پایانهٔ کامیون‌ها — عصر',
        text: 'الن می‌ره والمارت. تو می‌ری پایانه. فقط یه کامیون قرمز اونجاست.',
        dialogue: 'توماس هیل کامیونش رو می‌شوره. تی‌شرتش سفیده. مارک والمارت. نگاهت می‌کنه. سر تکون می‌ده. هیچی نمی‌گه.',
        choices: [{ label: 'ادامه...', next: 'scene32_missing_wife' }],
        onLoad: function() { gameState.clues.push('توماس — تی‌شرت والمارت — کامیون قرمز'); }
    },

    scene18_quiet: {
        location: 'کلانتری — شب',
        text: 'بی‌صدا تحقیق می‌کنی. کسی خبردار نمی‌شه.',
        dialogue: 'الن: «بی‌صدا پیش بریم بهتره. اگه قاتل بفهمه نزدیکشیم، فرار می‌کنه.»',
        choices: [{ label: 'ادامه...', next: 'scene32_missing_wife' }],
        onLoad: function() { gameState.time += 1; }
    },

        scene32_missing_wife: {
        location: 'کلانتری — عصر',
        text: 'تصمیم می‌گیری بری سراغ پروندهٔ زن گمشده. شوهرش تو اتاق انتظار نشسته. آرومه. زیادی آروم. دستاش رو پاهاش قفل شده. به دیوار زل زده.',
        dialogue: 'شوهرش: «همسرم رفته باشگاه. هر روز می‌ره. امروز برنگشت.» چند روز بعد جنازه پیدا می‌شه. طناب دور گردن. بدون صلیب. شوهرش گریه نمی‌کنه. الن: «این یه چیزی رو قایم می‌کنه. آدم عادی اینطوری نیست.»',
        choices: [
            { label: '۱. می‌رم با همسایه‌هاش حرف می‌زنم.', next: 'scene33_neighbors' },
            { label: '۲. میارمش بازجویی. همین الان.', next: 'scene33_interrogate' }
        ]
    },

    scene33_neighbors: {
        location: 'محلهٔ زن گمشده — عصر',
        text: 'همسایه‌ها پچ‌پچ می‌کنن. یه پیرزن از پشت پنجره نگاه می‌کنه.',
        dialogue: 'پیرزن: «همیشه دعوا داشتن. کتکش می‌زده. پلیس رو هم خبر کردیم. ولی زنش شکایت نمی‌کرد. می‌ترسید.» یه تماس: کیسی مارلو رو دیدن.',
        choices: [
            { label: '۱. خودم می‌رم دنبال کیسی. بازجویی شوهر رو بده به بیل و مایکل.', next: 'scene34_chase_kicy' },
            { label: '۲. قطعاً شوهر یه چیزی می‌دونه... الن می‌ره دنبال کیسی، من می‌مونم.', next: 'scene34_stay' }
        ],
        onLoad: function() { gameState.clues.push('خشونت خانگی — همسایه‌ها'); }
    },

    scene33_interrogate: {
        location: 'کلانتری — اتاق بازجویی — عصر',
        text: 'میاریش. عرق می‌ریزه. دستاش میلرزه.',
        dialogue: 'شوهر: «من هیچی نمی‌دونم. خونه بودم.» همون موقع یه تماس: کیسی مارلو رو دیدن.',
        choices: [
            { label: '۱. خودم می‌رم دنبال کیسی. بازجویی رو بده به بیل و مایکل.', next: 'scene34_chase_kicy' },
            { label: '۲. قطعاً یه چیزی می‌دونه... الن می‌ره، من می‌مونم.', next: 'scene34_stay' }
        ],
        onLoad: function() { gameState.stress += 1; }
    },

    scene34_chase_kicy: {
        location: 'کلانتری — ۳ ساعت بعد — شب',
        text: 'می‌ری دنبال کیسی. بازجویی رو بیل و مایکل می‌گیرن. ۳ ساعت بعد برمی‌گردی.',
        dialogue: 'شوهر اعتراف کرده. «من همه رو کشتم.» ولی صورتش کبوده. بیل و مایکل کتکش زدن. مایکل: «خب اعتراف کرد دیگه. مهم اینه.»',
        choices: [{ label: 'ادامه...', next: 'scene35_beat_confession' }],
        onLoad: function() { gameState.stress += 3; }
    },

    scene34_stay: {
        location: 'کلانتری — اتاق بازجویی — شب',
        text: 'الن می‌ره دنبال کیسی. تو می‌مونی. شوهر رو فشار می‌دی. سکوت می‌کنه.',
        dialogue: 'یهو گوشیش زنگ می‌خوره. یه پیام: «همه چی طبق برنامه.» گوشی رو ازش می‌گیری. «این کیه؟» جواب نمی‌ده.',
        choices: [{ label: 'ادامه...', next: 'scene35_suspicious_msg' }],
        onLoad: function() { gameState.clues.push('پیام مشکوک — همدست؟'); }
    },

    scene35_beat_confession: {
        location: 'کلانتری — شب',
        text: 'شوهر اعتراف کرده. پرونده بسته شده. شهر جشن گرفته. ولی تو می‌دونی اعتراف زیر شکنجه بوده.',
        dialogue: 'الن: «اگه اعترافش واقعی نباشه، قاتل آزاده. ولی اگه بفهمن بیل و مایکل کتکش زدن، اخراج می‌شن. چی کار می‌کنی جیمی؟»',
        choices: [
            { label: '۱. بیل و مایکل رو لو می‌دم. عدالت مهم‌تره.', trust: 1, guilt: 1, next: 'scene19_night_talk' },
            { label: '۲. چیزی نمی‌گم. شاید واقعاً قاتل همین باشه.', guilt: 3, next: 'scene19_night_talk' }
        ]
    },

    scene35_suspicious_msg: {
        location: 'کلانتری — شب',
        text: 'پیام رو نشون الن می‌دی.',
        dialogue: 'الن: «این یعنی یکی دیگه‌ست. شوهر فقط یه تیکه‌ست.» شوهر: «نمیدونم کی بود. گفت بکش وگرنه بچه‌ها رو می‌کشه.»',
        choices: [{ label: 'ادامه...', next: 'scene19_night_talk' }]
    },

    scene19_night_talk: {
        location: 'کلانتری — شب — بارون',
        text: 'شب. کلانتری خلوت. الن یه لیوان قهوه سرد دستشه. زل زده به پنجره.',
        dialogue: 'الن: «چند تا جنازه شد جیمی؟ ۵ تا؟ ۶ تا؟ دیگه شمارش رو از دست دادم. ما هیچ‌کاری نکردیم. من خسته شدم.»',
        choices: [
            { label: '۱. «منم خسته شدم. ولی نمی‌تونیم ولش کنیم.»', trust: 1, next: 'scene20_father' },
            { label: '۲. «شاید باید کمک بخوایم. از FBI.»', stress: -1, guilt: 1, next: 'scene20_father' },
            { label: '۳. «قسم خوردم به پدرش. می‌گیرمش.»', trust: 2, next: 'scene20_father' }
        ]
    },

    scene20_father: {
        location: 'کلانتری — جلوی در — شب',
        text: 'پدر امیلی می‌رسه. بارون می‌باره. گریه می‌کنه. می‌افته رو زمین.',
        dialogue: 'پدر امیلی: «گفتم پیداش می‌کنم... تو قول دادی. دختر من کجاست؟ ۱۳ ضربه چاقو. بچهٔ من.»',
        choices: [
            { label: '۱. «متأسفم. هر کاری کردم. نتونستم.»', next: 'scene21_silence' },
            { label: '۲. چیزی نمی‌گم. فقط نگاهش می‌کنم.', next: 'scene21_silence' },
            { label: '۳. «هنوز تموم نشده. قول می‌دم بگیرم.»', next: 'scene21_silence' }
        ]
    },

        scene21_silence: {
        location: 'نورثبروک — ماه‌ها بعد',
        text: 'ماه‌ها می‌گذره. هیچ سرنخی به جایی نمی‌رسه. قاتل بعد از نهمین قتل ساکت می‌شه. یک سال. هیچی. شهر کم‌کم آروم می‌شه. مردم فکر می‌کنن تموم شده. FBI می‌ره. پرونده سرد می‌شه.',
        dialogue: 'اما تو می‌دونی تموم نشده. یه چیزی ته دلت می‌گه این سکوت، سکوت قبل از طوفانه. شب‌ها بیداری. روزها خسته‌ای. الن هم همینطور.',
        choices: [{ label: 'ادامه...', next: 'scene22_discovery' }]
    },

    scene22_discovery: {
        location: 'جلگهٔ اطراف نورثبروک — پاییز',
        text: 'یه روز پاییزی. یه کشاورز محلی یه دست می‌بینه که از خاک بیرون زده. پلیس می‌ره. سگ‌ها رو میارن.',
        dialogue: 'الن: «جیمی... اینجا فقط یکی نیست...» ۲۰ جسد از زیر خاک بیرون میاد. همه زن. با ۹ تای قبلی می‌شه ۲۹ تا. کل شهر ساکت می‌شه.',
        choices: [{ label: 'ادامه...', next: 'scene23_reality' }]
    },

    scene23_reality: {
        location: 'کنار گودال — بارون',
        text: 'تو کنار گودال وایسادی. بارون می‌باره. چادر سفید پزشک قانونی روی ۲۰ جسد. الن کنارته. ساکت.',
        dialogue: '',
        choices: [
            { label: '۱. «ما هیچی نبودیم. اون همش جلوتر از ما بود.»', guilt: 2, stress: 1, next: 'scene24_doctor2' },
            { label: '۲. «الان می‌دونیم. حالا وقتشه تمومش کنیم.»', trust: 2, stress: 1, next: 'scene24_doctor2' },
            { label: '۳. چیزی نمی‌گم. فقط نگاه می‌کنم.', guilt: 1, trust: 1, next: 'scene24_doctor2' }
        ]
    },

    scene24_doctor2: {
        location: 'پزشک قانونی — ۳ روز بعد',
        text: 'پزشک قانونی بعد از ۳ روز بررسی. چشماش قرمزه.',
        dialogue: 'پزشک: «این اجساد مال بازهٔ ۸ ساله. همه زن. ۶ تاشون ناشناسن. طناب ۸ میلی‌متری روی همه. ۸ سال... و ما هیچی نمی‌دونستیم.»',
        choices: [
            { label: '۱. «۸ سال... ما ۸ سال عقبیم ازش.»', stress: 1, next: 'scene25_coffee' },
            { label: '۲. «پس قتل اول نبود. ما فقط اولین رو پیدا کردیم.»', guilt: 1, next: 'scene25_coffee' },
            { label: '۳. «این یعنی از اول ما رو بازی می‌داده.»', stress: 2, next: 'scene25_coffee' }
        ]
    },

    scene25_coffee: {
        location: 'کافه — شب',
        text: 'الن: «بریم کافه یه قهوه بخوریم. فقط یه ساعت.» میرین. قهوه رو می‌ذارن جلو. در باز می‌شه. پدر اِمیلی.',
        dialogue: 'پدر اِمیلی: «بهتون خوش می‌گذره؟ قهوه می‌خورین؟ دختر من مرده. ۲۹ تا آدم دیگه مردن. لعنت بهتون.» کافه ساکت می‌شه.',
        choices: [
            { label: '۱. «حق با شماست.»', guilt: 2, trust: 1, next: 'scene26_kicy' },
            { label: '۲. بلند می‌شم. پول رو می‌ذارم. می‌رم بیرون.', stress: 2, guilt: 1, next: 'scene26_kicy' },
            { label: '۳. «ما تمام روز سر جنازه‌ها بودیم. استراحت حقمونه.»', stress: 3, guilt: 1, next: 'scene26_kicy' }
        ]
    },

    scene26_kicy: {
        location: 'کلانتری — صبح',
        text: 'یه پسر جوون میاد جلوی کلانتری. وایمیسته. دستاش رو می‌ذاره رو سرش. تسلیم.',
        dialogue: 'کیسی مارلو: «من قاتل نیستم. پدر و مادرم از بچگی شکنجم می‌دادن. اون شب دیگه نتونستم. چاقو رو برداشتم و زدمشون. ولی نکشتمشون. فقط زدم که فرار کنم.»',
        choices: [
            { label: '۱. «مدرکی داری که قاتل نیستی؟»', next: 'scene27_kicy_talk' },
            { label: '۲. «چرا حالا اومدی؟ بعد این همه وقت؟»', next: 'scene27_kicy_talk' }
        ]
    },

    scene27_kicy_talk: {
        location: 'کلانتری — اتاق بازجویی',
        text: 'کیسی آروم حرف می‌زنه. دستاش رو میز گذاشته.',
        dialogue: 'کیسی: «می‌تونم کمک کنم. یه شب تو کلبهٔ قدیمی نزدیک جلگه یه مرد رو دیدم. بیل دستش بود. لاغر. مو مشکی. سر به زیر.»',
        choices: [{ label: 'ادامه...', next: 'scene28_plan' }],
        onLoad: function() { gameState.clues.push('کیسی — مرد لاغر مو مشکی با بیل'); }
    },

    scene28_plan: {
        location: 'کلانتری — شب',
        text: 'کیسی رو دارین. قاتل نیست. ولی می‌دونین قاتل لاغره، مو مشکی، سر به زیر.',
        dialogue: 'الن: «هیچ مظنونی نداریم. ولی می‌دونیم چی شکلیه. حالا چی؟»',
        choices: [
            { label: '۱. مأمور زن با لباس فاحشه می‌فرستیم تو جاده.', next: 'scene29_undercover' },
            { label: '۲. اطراف جلگه رو تحت نظر می‌گیریم.', next: 'scene29_valley' },
            { label: '۳. هر دو رو همزمان اجرا می‌کنیم.', next: 'scene29_both' }
        ]
    },

    scene29_undercover: {
        location: 'جاده — شب — تاریک',
        text: 'مأمور زن داوطلب می‌شه. لباس فاحشه می‌پوشه. می‌ره کنار جاده. شما از دور مراقبید. چند ساعت می‌گذره. یه کامیون قرمز وایمیسته. مرد مو مشکی لاغر. مأمورا از تاریکی می‌زنن بیرون.',
        dialogue: 'همون قیافه‌ست که شاهد توصیف کرده بود. همون که همیشه از کنارت رد می‌شد و نمی‌دیدیش. دستگیر می‌شه.',
        choices: [{ label: 'ادامه...', next: 'scene30_caught' }],
        onLoad: function() { gameState.stress -= 1; }
    },

    scene29_valley: {
        location: 'جلگه — هفته‌ها بعد',
        text: 'هفته‌ها می‌گذره. هیچی. قاتل نمیاد. اخبار رو شنیده. دیگه اونجا برنمی‌گرده.',
        dialogue: 'الن بیسیم رو می‌ذاره زمین: «تموم شد جیمی. قاتل رفته. ما شکست خوردیم.»',
        choices: [
            { label: 'دوباره بازی کن.', next: 'scene1', restart: true }
        ],
        onLoad: function() { gameState.time += 3; gameState.stress += 5; gameState.won = false; }
    },

    scene29_both: {
        location: 'نورثبروک — همزمان',
        text: 'منابع رو نصف می‌کنی. یه تیم می‌ره جلگه، یه تیم می‌ره جاده. جلگه هیچی. جاده جواب می‌ده.',
        dialogue: 'کامیون قرمز. مرد مو مشکی. دستگیر می‌شه.',
        choices: [{ label: 'ادامه...', next: 'scene30_caught' }],
        onLoad: function() { gameState.stress += 1; }
    },

    scene30_caught: {
        location: 'کلانتری — بازداشتگاه — شب',
        text: 'قاتل توی بازداشتگاهه. نشستی روبه‌روش. همون نگاه سر به زیر. همون آرامش لعنتی.',
        dialogue: 'متهم: «من حرفی ندارم. وکیل می‌خوام. تا وکیلم نیاد، چیزی نمی‌گم.»',
        choices: [{ label: 'ادامه...', next: 'scene31_lawyer' }]
    },

    scene30_failed: {
        location: 'نورثبروک — شب',
        text: 'هیچی. قاتل فراری. پرونده همچنان باز. شاید تا ابد.',
        dialogue: 'پایان مسیر اشتباه.',
        choices: [
            { label: 'دوباره بازی کن.', next: 'scene1', restart: true }
        ]
    },

    scene31_lawyer: {
        location: 'کلانتری — اتاق بازجویی — روز بعد',
        text: 'وکیلش میاد. زن میانسالی با کت و شلوار مشکی.',
        dialogue: 'متهم: «من شب‌ها خونه بودم. همیشه. زنم شاهده. ازش بپرسین.»',
        choices: [{ label: 'می‌رم پیش زنش.', next: 'scene32_wife' }]
    },

    scene32_wife: {
        location: 'خانهٔ متهم — عصر',
        text: 'می‌ری خونه‌ش. همون خونهٔ سیمانی. همون زن. بچه‌ها تو حیاط.',
        dialogue: 'زنش: «بله. شوهرم شب‌ها خونه بوده. یکی داره براش پاپوش می‌دوزه. آدم خوبیه.»',
        choices: [{ label: 'جی‌پی‌اس کامیونش رو چک می‌کنم.', next: 'scene33_gps' }]
    },

    scene33_gps: {
        location: 'کلانتری — صبح',
        text: 'جی‌پی‌اس کامیونش رو چک می‌کنی. تمام مکان‌های قتل. ۴۰ بار جلگه.',
        dialogue: 'الن: «این مدرکه. نمی‌تونه انکار کنه.»',
        choices: [{ label: 'ادامه...', next: 'scene34_dna' }]
    },

    scene34_dna: {
        location: 'پایانه — روز',
        text: 'زیر کف کامیون. لکه‌های خشک شده. می‌فرستی آزمایشگاه.',
        dialogue: 'تکنسین: «DNA مال ۳ تا از قربانیان. مدرک قطعی.»',
        choices: [{ label: 'کیسی رو میارم برای شهادت.', next: 'scene35_final' }]
    },

    scene35_final: {
        location: 'اتاق بازجویی — عصر',
        text: 'کیسی رو میاری. متهم نگاهش می‌کنه.',
        dialogue: 'متهم: «اون چاقوکشه. خودش تو جلگه بود. شاید خودش قاتله! شما احمقین؟ من چرا گناهکارم؟ چون کارم اینه که کل شهر رو بچرخم؟»',
        choices: [
            { label: '۱. متهم دروغ می‌گه. اون قاتله.', next: 'scene36_win' },
            { label: '۲. کیسی قاتله.', next: 'scene36_lose' },
            { label: '۳. یه نفر دیگه‌ست.', next: 'scene36_lose' }
        ]
    },

    scene36_win: {
        location: 'کلانتری — شب',
        text: 'درست گفتی. تمام مدارک بهش اشاره داره. قاتل دستگیر شد. بعد از ۸ سال و ۲۹ قربانی.',
        dialogue: 'الن اشک تو چشماشه: «تموم شد جیمی. تموم شد. باور نمی‌کنم.»',
        choices: [{ label: 'بیوگرافی قاتل.', next: 'scene37_bio' }],
        onLoad: function() { gameState.guilt -= 2; gameState.stress -= 3; gameState.won = true; }
    },

    scene36_lose: {
        location: 'کلانتری — شب',
        text: 'اشتباه کردی. قاتل اصلی رو ول کردی. یه بی‌گناه رو قربانی گرفتی.',
        dialogue: 'الن: «اشتباه کردیم جیمی... اشتباه کردیم.»',
        choices: [{ label: 'بیوگرافی قاتل واقعی.', next: 'scene37_bio' }],
        onLoad: function() { gameState.guilt += 5; gameState.stress += 5; gameState.won = false; }
    },

    scene37_bio: {
        location: '',
        text: '',
        dialogue: '',
        choices: [{ label: 'امتیاز من.', next: 'scene38_score' }],
        onLoad: function() {
            document.getElementById('location').innerHTML = 'پروندهٔ محرمانه — قاتل صلیبی';
            document.getElementById('sceneText').innerHTML = 
                '<div style="text-align:center;margin-bottom:20px;">' +
                '<span style="font-size:32px;color:#8b0000;">✞</span>' +
                '<h2 style="color:#8b0000;margin:10px 0;letter-spacing:3px;">توماس هیل</h2>' +
                '</div>' +
                '<div style="line-height:2.2;color:#b0a090;">' +
                '<strong>سن:</strong> ۳۰ سال<br>' +
                '<strong>شغل:</strong> راننده کامیون<br>' +
                '<strong>وضعیت تأهل:</strong> متأهل، دو فرزند<br>' +
                '<strong>تعداد قربانیان:</strong> ۲۹ نفر<br>' +
                '<strong>بازهٔ قتل‌ها:</strong> ۸ سال<br>' +
                '<strong>روش قتل:</strong> خفه‌کردن با طناب ۸ میلی‌متری<br>' +
                '<strong>امضا:</strong> صلیب چوبی در دهان (دو مورد)<br>' +
                '<strong>سابقه کیفری:</strong> اتهام تجاوز در ۲۲ سالگی — شاکی پس گرفت<br>' +
                '<strong>پروفایل:</strong> خانوادهٔ مذهبی سرد. پدر بی‌اعتنا. مادر با افسردگی شدید. شخصیت آرام، سر به زیر، بی‌اعتماد به نفس. همسایه‌ها: «پسر خوبی بود. بی‌آزاره.»' +
                '</div>';
            document.getElementById('dialogue').innerHTML = '';
        }
    },

    scene38_score: {
        location: '',
        text: '',
        dialogue: '',
        choices: [
            { label: 'دوباره بازی کن.', next: 'scene1', restart: true }
        ],
        onLoad: function() {
            let score = 100;
            let deductions = [];
            let bonuses = [];
            let pathSummary = [];

            if (gameState.magnusFree === true) {
                pathSummary.push('مگنوس رو آزاد کردی.');
            } else if (gameState.magnusFree === false) {
                pathSummary.push('مگنوس رو حبس کردی. تو زندان مرد.');
            }

            if (gameState.lockArrest) {
                pathSummary.push('وین رو بی‌مدرک حبس کردی. زندگی‌ش نابود شد.');
            }

            if (gameState.won === true) {
                pathSummary.push('قاتل رو دستگیر کردی.');
            } else {
                pathSummary.push('قاتل فرار کرد.');
            }

            if (gameState.time > 8) {
                let p = Math.floor((gameState.time - 8) * 2);
                score -= p;
                deductions.push('⏱ اتلاف وقت: -' + p);
            }
            if (gameState.stress > 4) {
                let p = Math.floor((gameState.stress - 4) * 3);
                score -= p;
                deductions.push('🧠 فشار روانی بالا: -' + p);
            }
            if (gameState.guilt > 2) {
                let p = gameState.guilt * 4;
                score -= p;
                deductions.push('😔 تصمیم‌های اشتباه: -' + p);
            }
            if (gameState.redHerrings && gameState.redHerrings > 0) {
                let p = gameState.redHerrings * 5;
                score -= p;
                deductions.push('🔍 سرنخ‌های گمراه‌کننده: -' + p);
            }
            if (gameState.lockArrest) {
                score -= 10;
                deductions.push('⛓ بازداشت بی‌مدرک وین: -10');
            }
            if (gameState.magnusFree === false) {
                score -= 15;
                deductions.push('🔒 حبس بی‌گناه (مگنوس): -15');
            }
            if (gameState.won === false) {
                score -= 30;
                deductions.push('❌ نتیجهٔ نهایی اشتباه: -30');
            }
            if (gameState.won === true && gameState.clues.length >= 5) {
                score += 10;
                bonuses.push('🏆 پاداش کارآگاه خوب: +10');
            }

            if (score < 0) score = 0;
            if (score > 100) score = 100;

            let rank = score >= 85 ? '🏆 کارآگاه نخبه' : score >= 65 ? '🎖 کارآگاه با تجربه' : score >= 40 ? '📋 کارآگاه متوسط' : '📚 نیاز به آموزش';
            let rankColor = score >= 85 ? '#c8a850' : score >= 65 ? '#a0a0a0' : score >= 40 ? '#8b6b4b' : '#6b3030';

            document.getElementById('location').innerHTML = '📋 گزارش نهایی پرونده';
            
            let html = '<div style="text-align:center;margin:20px 0;">';
            html += '<div style="font-size:52px;color:' + rankColor + ';">' + score + '</div>';
            html += '<div style="color:#6b5050;">از ۱۰۰ امتیاز</div>';
            html += '<div style="font-size:20px;color:' + rankColor + ';margin-top:15px;">' + rank + '</div>';
            html += '</div>';

            if (pathSummary.length > 0) {
                html += '<div style="margin-top:20px;padding:15px;background:rgba(0,0,0,0.2);border:1px solid #1a1a1a;border-radius:2px;">';
                html += '<div style="color:#5a4a3a;margin-bottom:10px;font-size:12px;letter-spacing:2px;">▸ مسیر تو</div>';
                for (let p of pathSummary) {
                    html += '<div style="color:#706050;font-size:13px;line-height:2;">' + p + '</div>';
                }
                html += '</div>';
            }

            if (deductions.length > 0) {
                html += '<div style="margin-top:15px;padding:15px;background:rgba(139,0,0,0.05);border:1px solid #2a1a1a;border-radius:2px;">';
                html += '<div style="color:#8b0000;margin-bottom:10px;font-size:12px;letter-spacing:2px;">▸ کسر امتیازات</div>';
                for (let d of deductions) {
                    html += '<div style="color:#906060;font-size:13px;line-height:2;">' + d + '</div>';
                }
                html += '</div>';
            }

            if (bonuses.length > 0) {
                html += '<div style="margin-top:15px;padding:15px;background:rgba(200,168,80,0.05);border:1px solid rgba(200,168,80,0.2);border-radius:2px;">';
                html += '<div style="color:#c8a850;margin-bottom:10px;font-size:12px;letter-spacing:2px;">▸ پاداش‌ها</div>';
                for (let b of bonuses) {
                    html += '<div style="color:#b0a060;font-size:13px;line-height:2;">' + b + '</div>';
                }
                html += '</div>';
            }

            document.getElementById('sceneText').innerHTML = html;
            document.getElementById('dialogue').innerHTML = '';
        }
    }

};

// ══════════════════════════════════════════════════
// سیستم بازی
// ══════════════════════════════════════════════════

let gameState = {
    time: 0,
    trust: 5,
    clues: [],
    stress: 0,
    guilt: 0,
    redHerrings: 0,
    currentScene: 'scene1',
    magnusFree: null,
    lockArrest: false,
    won: null
};

function loadScene(sceneId) {
    const scene = story[sceneId];
    if (!scene) { console.error('Scene not found:', sceneId); return; }
    
    gameState.currentScene = sceneId;
    
    document.getElementById('location').innerHTML = scene.location || '';
    document.getElementById('sceneText').innerHTML = scene.text || '';
    document.getElementById('dialogue').innerHTML = scene.dialogue || '';
    
    let html = '';
    if (scene.choices && scene.choices.length > 0) {
        for (let i = 0; i < scene.choices.length; i++) {
            html += '<button class="choice-btn" onclick="choose(' + i + ')">' + scene.choices[i].label + '</button>';
        }
    }
    document.getElementById('choices').innerHTML = html;
    
    document.getElementById('clueCount').textContent = 'سرنخ: ' + gameState.clues.length;
    document.getElementById('timeDisplay').textContent = 'روز: ' + (gameState.time + 1);
    
    if (scene.onLoad) {
        try { scene.onLoad(); } catch(e) { console.error('onLoad error:', e); }
    }
}

function choose(index) {
    const scene = story[gameState.currentScene];
    if (!scene || !scene.choices || index >= scene.choices.length) return;
    
    const c = scene.choices[index];
    
    if (c.restart) {
        gameState = {
            time: 0,
            trust: 5,
            clues: [],
            stress: 0,
            guilt: 0,
            redHerrings: 0,
            currentScene: 'scene1',
            magnusFree: null,
            lockArrest: false,
            won: null
        };
        loadScene('scene1');
        return;
    }
    
    if (c.clue && gameState.clues.indexOf(c.clue) === -1) gameState.clues.push(c.clue);
    if (c.trust) gameState.trust += c.trust;
    if (c.time) gameState.time += c.time;
    if (c.stress) gameState.stress += c.stress;
    if (c.guilt) gameState.guilt += c.guilt;
    if (c.redHerrings) gameState.redHerrings += c.redHerrings;
    if (c.magnusFree !== undefined) gameState.magnusFree = c.magnusFree;
    if (c.lockArrest) gameState.lockArrest = true;
    if (c.won !== undefined) gameState.won = c.won;
    
    if (gameState.trust < 0) gameState.trust = 0;
    if (gameState.trust > 10) gameState.trust = 10;
    if (gameState.stress < 0) gameState.stress = 0;
    if (gameState.stress > 10) gameState.stress = 10;
    if (gameState.guilt < 0) gameState.guilt = 0;
    
    loadScene(c.next);
}

window.onload = function() {};

};


