const story = {

    // ─── صحنه ۱ ───
    scene1: {
        location: 'جادهٔ ۱۷ — غروب — بارون ریز',
        text: 'بیسیم: «جسد زن کنار جادهٔ ۱۷.»',
        dialogue: 'الن: «خفه شده. طناب رو برده. این صلیب رو ببین...»',
        choices: [
            {
                label: '۱. صلیب رو برمی‌دارم، بررسی می‌کنم.',
                clue: 'صلیب چوبی دست‌ساز',
                next: 'scene2'
            },
            {
                label: '۲. از الن می‌پرسم: «تو ۱۸ سال سابقت، همچین چیزی دیدی؟»',
                trust: 1,
                next: 'scene2_alt'
            }
        ]
    },

    // ─── صحنه ۲: مسیر بررسی فیزیکی ───
    scene2: {
        location: 'جادهٔ ۱۷ — شب — بارون',
        text: 'صلیب رو با دستمال برمی‌داری. چوب کاج. خراش‌های ریز روش. با چاقو کنده‌کاری شده.',
        dialogue: 'الن: «انگار تازه‌س. کی صلیب می‌ذاره تو دهن جسد؟»',
        choices: [
            {
                label: '۱. صلیب رو به الن می‌دم برای آزمایشگاه.',
                next: 'scene3_lab'
            },
            {
                label: '۲. صلیب رو می‌ذارم تو جیبم.',
                stress: 1,
                next: 'scene3_pocket'
            }
        ]
    },

    // ─── صحنه ۲: مسیر گفتگو با الن ───
    scene2_alt: {
        location: 'جادهٔ ۱۷ — شب — بارون',
        text: 'الن نگاهش روی صلیب قفل شده.',
        dialogue: 'الن: «نه. ۱۸ ساله اینجام. هیچ‌کس صلیب نذاشته تو دهن جسد. این یه پیامه جیمی.»',
        choices: [
            {
                label: '۱. «پس ببینیم چی می‌خواد بگه.» صلیب رو برمی‌دارم.',
                clue: 'صلیب چوبی دست‌ساز',
                next: 'scene3_lab'
            },
            {
                label: '۲. «شاید یه مریض بوده.» بی‌خیال صلیب می‌شیم.',
                next: 'scene3_ignore'
            }
        ]
    },

    // ─── صحنه ۳: آزمایشگاه ───
    scene3_lab: {
        location: 'کلانتری — ۳ روز بعد — عصر',
        text: 'سه روز از قتل گذشته. یه پاکت نامه رسیده به کلانتری.',
        dialogue: 'الن: «نامه رو گذاشتن دم در.» نامه: «جهنم نزدیکه. همه شما قراره برده‌های من بشین. تا ابد. راه فراری برای هیچ‌کس نیست.»',
        choices: [
            {
                label: '۱. «باید تو مزرعه‌ها رو بگردیم.»',
                time: 3,
                next: 'scene4_farm'
            },
            {
                label: '۲. «این آدم بیمار روانیه. ببریمش پیش روان‌پزشک.»',
                stress: 1,
                next: 'scene4_psych'
            },
            {
                label: '۳. «این نامه شاید مال قاتل نباشه.»',
                next: 'scene4_magnus'
            }
        ]
    },

    // ─── صحنه ۳: تو جیب ───
    scene3_pocket: {
        location: 'خانهٔ جیمی — نیمه‌شب — بارون',
        text: 'صلیب رو تو جیبت گذاشتی. شب نگاهش می‌کنی. خراش‌های روش نامنظم.',
        dialogue: 'سه روز بعد. یه نامه رسیده. الن: «نامه رو گذاشتن دم در.» نامه: «جهنم نزدیکه. همه شما قراره برده‌های من بشین.»',
        choices: [
            {
                label: '۱. «باید تو مزرعه‌ها رو بگردیم.»',
                time: 3,
                next: 'scene4_farm'
            },
            {
                label: '۲. «این آدم بیمار روانیه.»',
                stress: 1,
                next: 'scene4_psych'
            },
            {
                label: '۳. «این نامه شاید مال قاتل نباشه.»',
                next: 'scene4_magnus'
            }
        ]
    },

    // ─── صحنه ۳: بی‌خیال صلیب ───
    scene3_ignore: {
        location: 'کلانتری — ۳ روز بعد — عصر',
        text: 'بی‌خیال صلیب شدی. تیم جنایی اومد. جنازه رو بردن. یه نامه رسیده.',
        dialogue: 'الن: «نامه رو گذاشتن دم در.» نامه: «جهنم نزدیکه. همه شما قراره برده‌های من بشین.»',
        choices: [
            {
                label: '۱. «باید تو مزرعه‌ها رو بگردیم.»',
                time: 3,
                next: 'scene4_farm'
            },
            {
                label: '۲. «این آدم بیمار روانیه.»',
                stress: 1,
                next: 'scene4_psych'
            },
            {
                label: '۳. «این نامه شاید مال قاتل نباشه.»',
                next: 'scene4_magnus'
            }
        ]
    },

    // ─── صحنه ۴: مزرعه‌ها ───
    scene4_farm: {
        location: 'مزارع اطراف نورثبروک — ۳ روز بعد — عصر',
        text: 'سه روز مزارع رو گشتی. هیچی. ولی یه راننده کامیون دیدی.',
        dialogue: 'الن: «این وین استپلتونه. می‌گه استراحت می‌کرده.»',
        choices: [
            {
                label: '۱. از وین بازجویی می‌کنم.',
                next: 'scene5_vin'
            },
            {
                label: '۲. اسمش رو یادداشت می‌کنم.',
                clue: 'وین استپلتون — مظنون',
                next: 'scene5_next'
            }
        ]
    },

    // ─── صحنه ۴: روان‌پزشک ───
    scene4_psych: {
        location: 'مطب روان‌پزشک — ۲ روز بعد — صبح',
        text: 'نامه رو بردی پیش دکتر میسون.',
        dialogue: 'دکتر: «مرد ۲۵-۴۰ سال. از مذهب متنفره. شغلش جابجایی زیاد داره. خشونت علیه زنان.» الن: «با ۲۰۰ نفر تو شهر جور درمیاد.»',
        choices: [
            {
                label: '۱. می‌رم سراغ لیست راننده‌ها.',
                next: 'scene5_drivers'
            },
            {
                label: '۲. «وقت تلف کردیم.» برمی‌گردم.',
                stress: 2,
                next: 'scene5_next'
            }
        ]
    },

    // ─── صحنه ۴: مگنوس ───
    scene4_magnus: {
        location: 'کلانتری — اتاق بازجویی — شب',
        text: 'مگنوس رو آوردن. دست‌هاش میلرزه.',
        dialogue: 'مگنوس: «قسم می‌خورم! یه نفر پول داد. ماسک داشت. گفت ببر کلانتری.»',
        choices: [
            {
                label: '۱. باور می‌کنم. آزادش می‌کنم.',
                trust: 1,
                guilt: 1,
                magnusFree: true,
                next: 'scene5_free'
            },
            {
                label: '۲. باور نمی‌کنم. حبسش می‌کنم.',
                magnusFree: false,
                next: 'scene5_jail'
            }
        ]
    },

    // ─── صحنه ۵: آزاد کردن مگنوس ───
    scene5_free: {
        location: 'جادهٔ ۹ — چند روز بعد — غروب',
        text: 'مگنوس رو آزاد کردی.',
        dialogue: 'بیسیم: «جسد زن دیگه‌ای پیدا شده. جادهٔ ۹. طناب دور گردن.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene6_drivers'
            }
        ]
    },

    // ─── صحنه ۵: حبس مگنوس ───
    scene5_jail: {
        location: 'کلانتری — همون موقع',
        text: 'مگنوس می‌ره زندان. ۳ ماه.',
        dialogue: 'پرونده ادامه داره.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene6_drivers'
            }
        ]
    },

    // ─── صحنه ۵: بازجویی وین ───
    scene5_vin: {
        location: 'مزرعهٔ متروکه — عصر',
        text: 'از وین می‌پرسی. آروم جواب می‌ده.',
        dialogue: 'وین: «استراحت. ۲۵ ساله این جاده‌ها رو می‌رم. مگه جرمه؟» کامیونش تمیزه.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene6_drivers'
            }
        ]
    },

    // ─── صحنه ۵: لیست راننده‌ها ───
    scene5_drivers: {
        location: 'کلانتری — صبح',
        text: 'لیست راننده‌ها رو میاری. سه تا اسم.',
        dialogue: 'الن: «وین استپلتون، مایکل تالبوت، توماس هیل.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene6_drivers'
            }
        ]
    },

    // ─── صحنه ۵: برگشت به کلانتری ───
    scene5_next: {
        location: 'کلانتری — شب — بارون',
        text: 'دست خالی برمی‌گردی.',
        dialogue: 'الن: «چیزی پیدا نکردیم. ولی این قاتل دوباره می‌زنه.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene6_drivers'
            }
        ]
    },

    // ─── صحنه ۶: تحقیق از سه راننده ───
    scene6_drivers: {
        location: 'نورثبروک — عصر',
        text: 'سه تا اسم: وین استپلتون، مایکل تالبوت، توماس هیل.',
        dialogue: 'الن: «وین رو دیدیم. مایکل راننده شرکت رقیبه. توماس ۸ سال پیش متهم به تجاوز شد، دختره پس گرفت.»',
        choices: [
            {
                label: '۱. بریم سراغ توماس. اون سابقه داره.',
                next: 'scene7_thomas'
            },
            {
                label: '۲. کامیون وین بوی وایتکس میداد. یه چیزی رو پاک می‌کنه.',
                next: 'scene7_vin'
            },
            {
                label: '۳. زن مایکل گفته شب حادثه یهو از خونه زده بیرون.',
                next: 'scene7_michael'
            }
        ]
    },

    // ─── صحنه ۷: تحقیق توماس ───
    scene7_thomas: {
        location: 'خانهٔ توماس هیل — عصر',
        text: 'می‌ری خونه‌ش. همسرش در رو باز می‌کنه.',
        dialogue: 'زنش: «شوهرم خونه بود. پیش من و بچه‌ها.» در رو می‌بنده. همسایه: «توماس پسر خوبیه. بی‌آزاره.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene8_suspects'
            }
        ]
    },

    // ─── صحنه ۷: تحقیق وین ───
    scene7_vin: {
        location: 'پایانهٔ کامیون‌ها — عصر',
        text: 'برمی‌گردی پایانه. بوی وایتکس.',
        dialogue: 'وین: «ضدعفونی. وسواس دارم.» یه جعبه طناب گوشه کامیونش. می‌گه: «مال بارگیریه.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene8_suspects'
            }
        ]
    },

    // ─── صحنه ۷: تحقیق مایکل ───
    scene7_michael: {
        location: 'خانهٔ مایکل تالبوت — عصر',
        text: 'می‌ری خونه‌ش. زنش میلرزه.',
        dialogue: 'زنش: «شب حادثه یهو از خونه زد بیرون. صبح برگشت.» می‌گه: «نمی‌تونم بگم کجا بودم.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene8_suspects'
            }
        ]
    },

    // ─── صحنه ۸: تصمیم ───
    scene8_suspects: {
        location: 'کلانتری — شب — بارون',
        text: 'سه تا مظنون. هیچ‌کدوم مدرک قطعی ندارن.',
        dialogue: 'الن: «کدومشونه جیمی؟»',
        choices: [
            {
                label: '۱. وین رو بازجویی می‌کنم.',
                next: 'scene9_vin_arrest'
            },
            {
                label: '۲. مایکل رو بازجویی می‌کنم.',
                next: 'scene9_michael_inter'
            },
            {
                label: '۳. هر سه رو ول می‌کنم.',
                guilt: 2,
                stress: 2,
                next: 'scene9_letgo'
            }
        ]
    },

    // ─── صحنه ۹: بازداشت وین ───
    scene9_vin_arrest: {
        location: 'کلانتری — اتاق بازجویی — شب',
        text: 'وین رو آوردی. داد می‌زنه.',
        dialogue: 'الن: «مدرکی علیهش نداریم.»',
        choices: [
            {
                label: '۱. می‌ندازمش حبس.',
                next: 'scene10_vin_jailed'
            },
            {
                label: '۲. ولش می‌کنم.',
                trust: 1,
                next: 'scene10_vin_free'
            }
        ]
    },

    // ─── صحنه ۱۰: حبس وین ───
    scene10_vin_jailed: {
        location: 'کلانتری — چند روز بعد',
        text: 'وین می‌ره بازداشت. روزنامه تیتر می‌زنه. چند روز بعد جسد دوم و سوم پیدا می‌شن. وین تو بازداشته. بی‌گناهه.',
        dialogue: 'وین آزاد می‌شه. اخراج. مردم می‌ترسن. بچه‌هاش کتک می‌خورن. الن: «زندگیش رو نابود کردیم.»',
        choices: [
            {
                label: '۱. «اشتباه کردیم؟»',
                guilt: 1,
                trust: 1,
                next: 'scene11_bodies'
            },
            {
                label: '۲. «همه چی بر علیهش بود.»',
                stress: 1,
                trust: -1,
                next: 'scene11_bodies'
            },
            {
                label: '۳. «باید بیشتر مراقب باشیم.»',
                guilt: 1,
                lockArrest: true,
                next: 'scene11_bodies'
            }
        ]
    },

    // ─── صحنه ۱۰: آزاد کردن وین ───
    scene10_vin_free: {
        location: 'کلانتری — شب',
        text: 'وین رو ول می‌کنی.',
        dialogue: 'الن: «تصمیم درستی بود.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene11_bodies'
            }
        ]
    },

    // ─── صحنه ۹: بازجویی مایکل ───
    scene9_michael_inter: {
        location: 'اتاق بازجویی — شب',
        text: 'مایکل اعتراف می‌کنه.',
        dialogue: 'مایکل: «با یه زن دیگه بودم. به زنم خیانت کردم. برای همین نمی‌تونستم بگم.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene11_bodies'
            }
        ]
    },

    // ─── صحنه ۹: ول کردن هر سه ───
    scene9_letgo: {
        location: 'خانهٔ جیمی — نیمه‌شب — بارون',
        text: 'هر سه رو ول کردی.',
        dialogue: 'بیسیم: «دو جسد پیدا شده. جادهٔ ۲۳.» دیر شده.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene11_bodies'
            }
        ]
    },

    // ─── صحنه ۱۱: پیدا شدن جنازه‌های دوم و سوم ───
    scene11_bodies: {
        location: 'جادهٔ ۲۳ — صبح — مه غلیظ',
        text: 'دو تا دختر جوون. خواهر. فاصله دو متر. طناب دور گردن. بدون صلیب.',
        dialogue: 'الن: «هر دو خفه شدن. اینا ورزشکار بودن. قوی. یه نفر چطور دو تا رو خفه می‌کنه؟»',
        choices: [
            {
                label: '۱. «شاید دو نفر بودن. دو تا قاتل.»',
                time: 2,
                redHerrings: 1,
                next: 'scene12_aftermath'
            },
            {
                label: '۲. «شاید اول یکی رو گرفت، اون یکی تسلیم شد. خواهرش بود.»',
                clue: 'بند پلاستیکی',
                next: 'scene12_aftermath'
            },
            {
                label: '۳. «نمی‌دونم. بذار پزشک قانونی جواب بده.»',
                stress: 1,
                time: 1,
                next: 'scene12_aftermath'
            }
        ]
    },

    // ─── صحنه ۱۲: بعد از پزشک قانونی ───
    scene12_aftermath: {
        location: 'کلانتری — شب',
        text: 'پزشک قانونی: بند پلاستیکی دور مچ. طناب ۸ میلی‌متری. اول بسته شدن، بعد خفه شدن. یه نفر با برنامه.',
        dialogue: 'الن: «۳ تا جنازه. همه زن. همه طناب. حالا چی؟»',
        choices: [
            {
                label: '۱. «همه تو جاده پیدا شدن. قاتل راننده‌ست. ولی راننده‌های زیادی تو شهر هستن.»',
                trust: 1,
                next: 'scene13_letter2'
            },
            {
                label: '۲. «الگویی نیست. فقط می‌کشه و ما نمی‌تونیم جلوش رو بگیریم.»',
                stress: 2,
                next: 'scene13_letter2'
            }
        ]
    },

    // ─── صحنه ۱۳: نامهٔ دوم ───
    scene13_letter2: {
        location: 'کلانتری — چند هفته بعد — عصر',
        text: 'چند هفته گذشته. پرونده سرده. یه نامهٔ جدید می‌رسه.',
        dialogue: 'نامه: «ترسو تو چشاش دیدم. خستم. خسته از همه چی. می‌دونی بهشت کجاست؟ همینجا. فقط بدون آدماش. من می‌خوام بهشتو بسازم. شما فقط مزاحمین.» الن: «این داره بدتر می‌شه...»',
        choices: [
            {
                label: '۱. «این بار اثر انگشت می‌گیریم. شاید اشتباه کنه.»',
                time: 1,
                stress: 1,
                next: 'scene14_emily'
            },
            {
                label: '۲. «می‌خواد مارو عصبانی کنه. بریم سراغ راننده‌ها.»',
                clue: 'توماس هیل — فقط حس',
                next: 'scene14_emily'
            },
            {
                label: '۳. «دوباره از مگنوس بپرسیم. شاید چیزی یادش بیاد.»',
                next: 'scene13_magnus_check'
            }
        ]
    },

    // ─── صحنه ۱۳: بررسی وضعیت مگنوس ───
    scene13_magnus_check: {
        location: '',
        text: '',
        dialogue: '',
        choices: [],
        onLoad: function() {
            if (gameState.magnusFree === true) {
                document.getElementById('location').innerHTML = 'خیابان‌های نورثبروک — شب';
                document.getElementById('sceneText').innerHTML = 'مگنوس رو پیدا می‌کنی. هنوز می‌ترسه.';
                document.getElementById('dialogue').innerHTML = 'مگنوس: «یادم اومد. ماسکش سیاه بود. بوی بنزین می‌داد. مثل کامیون.»';
                document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene14_emily\')">ادامه...</button>';
                gameState.clues.push('بوی بنزین — کامیون');
            } else if (gameState.magnusFree === false) {
                document.getElementById('location').innerHTML = 'زندان ایالتی — صبح';
                document.getElementById('sceneText').innerHTML = 'می‌ری زندان. نگهبان دم در نگاهت می‌کنه.';
                document.getElementById('dialogue').innerHTML = 'نگهبان: «دیر اومدی کارآگاه. مگنوس دیشب مرد. هم‌سلولیش کشتش. همونی که دوست قربانی اول بود.» مگنوس رفته. برای همیشه.';
                document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene14_emily\')">ادامه...</button>';
                gameState.guilt += 3;
                gameState.stress += 3;
            } else {
                document.getElementById('location').innerHTML = 'کلانتری — شب';
                document.getElementById('sceneText').innerHTML = 'مگنوس جایی نیست. نمی‌دونی کجاست.';
                document.getElementById('dialogue').innerHTML = 'الن: «ولش کن جیمی. ازش چیزی درنمیاد.»';
                document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene14_emily\')">ادامه...</button>';
            }
        }
    },

    // ─── صحنه ۱۴: گم شدن امیلی ───
    scene14_emily: {
        location: 'کلانتری — شب — بارون',
        text: 'الن با عجله میاد تو.',
        dialogue: 'الن: «جیمی... یه دختر دیگه گم شده. امشب. از کتابخونه. اِمیلی کارتر. ۱۴ سالشه.» همهٔ پلیسا واکنش نشون می‌دن. این یکی بچهٔ مردمه.',
        choices: [
            {
                label: '۱. می‌رم با خانواده حرف می‌زنم.',
                next: 'scene15_family'
            },
            {
                label: '۲. مسیر کتابخونه تا خونه‌ش رو بررسی می‌کنم.',
                next: 'scene15_route'
            },
            {
                label: '۳. از هم‌مدرس‌ه‌ای‌هاش می‌پرسم.',
                next: 'scene15_school'
            }
        ]
    },

    // ─── صحنه ۱۵: خانواده ───
    scene15_family: {
        location: 'کلانتری — اتاق انتظار — شب',
        text: 'مادرش گریه می‌کنه. پدرش عصبانیه.',
        dialogue: 'پدر: «یک ماه و نیمه هیچ کاری نکردین! خودم قاتلو پیدا می‌کنم. می‌کشمش.» فرداش رسانه‌ها علیه پلیس می‌شن.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene16_emily_found'
            }
        ],
        onLoad: function() {
            gameState.stress += 2;
            gameState.guilt += 1;
        }
    },

    // ─── صحنه ۱۵: مسیر ───
    scene15_route: {
        location: 'مسیر کتابخونه تا خونهٔ کارتر — شب',
        text: 'مسیر رو بررسی می‌کنی. هیچی نیست. فقط یه دوربین مداربستهٔ خراب.',
        dialogue: 'نگهبان: «۳ ماهه کار نمی‌کنه.» وقت تلف کردی.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene16_emily_found'
            }
        ],
        onLoad: function() {
            gameState.time += 2;
            gameState.stress += 1;
        }
    },

    // ─── صحنه ۱۵: هم‌مدرس‌ه‌ای‌ها ───
    scene15_school: {
        location: 'مدرسهٔ نورثبروک — صبح فردا',
        text: 'دوست اِمیلی می‌گه: «اِمیلی با یه پسر جوون حرف می‌زد. مو مشکی. سر به زیر. کم‌حرف.»',
        dialogue: 'الن: «کیسی مارلو. یک ماه و نیم پیش از خونه فرار کرد. درست موقع شروع قتل‌ها. مادر و پدرش رو زد و رفت.»',
        choices: [
            {
                label: '۱. «همه نیرو رو بذاریم دنبال کیسی مارلو. اون قاتله.»',
                next: 'scene16_chase'
            },
            {
                label: '۲. «کیسی فقط یه پسر فراریه. وقت تلف نکنیم.»',
                next: 'scene16_emily_found'
            }
        ]
    },

    // ─── صحنه ۱۶: دنبال کیسی ───
    scene16_chase: {
        location: 'نورثبروک و اطراف — هفته‌های بعد',
        text: 'همه نیرو می‌ره دنبال کیسی مارلو. جنگل. خونه‌های متروکه.',
        dialogue: 'هیچی پیدا نمی‌شه. هفته‌ها می‌گذره. شهر در آستانهٔ انفجاره.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene16_emily_found'
            }
        ],
        onLoad: function() {
            gameState.time += 3;
            gameState.stress += 2;
            gameState.redHerrings = (gameState.redHerrings || 0) + 1;
        }
    },

    // ─── صحنه ۱۶: پیدا شدن امیلی ───
    scene16_emily_found: {
        location: 'جنگل لارچ هالو — صبح — مه',
        text: 'سه روز گذشته. بیسیم: «جسد پیدا شده. جنگل لارچ هالو. دختر ۱۴ ساله...»',
        dialogue: 'می‌رسی. اِمیلی. ولی این بار فرق می‌کنه. طناب نیست. ۱۳ ضربه چاقو. سینه. شکم. صورتش سالم مونده. بدون صلیب. الن: «این فرق می‌کنه جیمی... طناب نیست. این ۱۳ ضربه چاقوئه. این شخصیه.»',
        choices: [
            {
                label: '۱. «این قطعاً کار قاتل سریالی نیست. قبلیا با طناب بودن. این یکی شخصیه.»',
                next: 'scene17_knife_theory'
            },
            {
                label: '۲. «شاید عمداً روشش رو عوض کرده. می‌خواد ما رو گیج کنه.»',
                next: 'scene17_knife_theory'
            },
            {
                label: '۳. «نمی‌دونم. ولی ۱۳ ضربه... این نفرته. قاتل ازش متنفر بوده یا می‌شناخته‌ش.»',
                next: 'scene17_knife_theory'
            }
        ]
    },

    // ─── صحنه ۱۷: نظریه چاقو ───
    scene17_knife_theory: {
        location: 'جنگل لارچ هالو — صبح',
        text: '',
        dialogue: '',
        choices: [],
        onLoad: function() {
            let theoryText = '';
            let theoryDialogue = '';
            let choiceLabel = '';
            
            if (gameState.currentScene === 'scene16_emily_found') {
                // اینجا نمی‌تونیم بدونیم کدوم انتخاب شده، پس یه مسیر پیش‌فرض می‌ذاریم
                theoryText = 'نمی‌دونی چی فکر کنی. این جنازه با همه فرق داره.';
                theoryDialogue = 'الن: «هرچی هست، این یکی مارو به قاتل نزدیک‌تر می‌کنه. حسش می‌کنم.»';
            }
            
            document.getElementById('location').innerHTML = 'جنگل لارچ هالو — صبح';
            document.getElementById('sceneText').innerHTML = theoryText;
            document.getElementById('dialogue').innerHTML = theoryDialogue;
            document.getElementById('choices').innerHTML = '<button class="choice-btn" onclick="loadScene(\'scene17_doctor\')">ادامه...</button>';
        }
    },

    // ─── صحنه ۱۷: پزشک قانونی ───
    scene17_doctor: {
        location: 'پزشک قانونی — عصر',
        text: 'پزشک قانونی معاینه رو تموم می‌کنه.',
        dialogue: 'پزشک: «زیر ناخن‌هاش پارچه هست. پنبه. ارزون. تی‌شرت کار. مارک والمارت. از اونایی که تو والمارت می‌فروشن. کلی کارگر و راننده ازش می‌خرن.»',
        choices: [
            {
                label: '۱. می‌رم والمارت. لیست خریداران رو می‌خوام.',
                next: 'scene18_walmart1'
            },
            {
                label: '۲. از الن می‌خوام بره والمارت. خودم می‌رم پایانه.',
                next: 'scene18_terminal'
            },
            {
                label: '۳. این سرنخ رو بی‌صدا دنبال می‌کنم.',
                next: 'scene18_quiet'
            }
        ]
    },

    // ─── صحنه ۱۸: والمارت (خودت می‌ری) ───
    scene18_walmart1: {
        location: 'والمارت نورثبروک — صبح',
        text: 'می‌ری والمارت. فروشنده پیرمرده.',
        dialogue: 'فروشنده: «این تی‌شرت‌ها رو خیلی‌ها می‌خرن. نمی‌تونم لیست بدم. حریم خصوصیه. حکم می‌خواد.» باید حکم بگیری. وقت می‌بره.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene19_night_talk'
            }
        ],
        onLoad: function() {
            gameState.time += 2;
        }
    },

    // ─── صحنه ۱۸: الن می‌ره والمارت، تو پایانه ───
    scene18_terminal: {
        location: 'پایانهٔ کامیون‌ها — عصر',
        text: 'الن می‌ره والمارت. تو می‌ری پایانه. وین نیست. مایکل نیست.',
        dialogue: 'توماس کامیونش رو می‌شوره. تی‌شرتش سفیده. ساده. مارک والمارت. نگاهت می‌کنه. سر تکون می‌ده. به شستن ادامه می‌ده.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene19_night_talk'
            }
        ],
        onLoad: function() {
            gameState.clues.push('توماس — تی‌شرت والمارت');
        }
    },

    // ─── صحنه ۱۸: بی‌صدا ───
    scene18_quiet: {
        location: 'کلانتری — شب',
        text: 'بی‌صدا تحقیق می‌کنی. کسی خبردار نمی‌شه.',
        dialogue: 'ولی تحقیق کندتر پیش می‌ره. زمان از دست می‌دی.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene19_night_talk'
            }
        ],
        onLoad: function() {
            gameState.time += 1;
        }
    },

    // ─── صحنه ۱۹: گفتگو با الن ───
    scene19_night_talk: {
        location: 'کلانتری — شب — بارون',
        text: 'شب. کلانتری خلوت. الن یه لیوان قهوه سرد دستشه.',
        dialogue: 'الن: «۴ تا جنازه جیمی. ۴ تا. ما هیچ‌کاری نکردیم. من... خسته شدم.»',
        choices: [
            {
                label: '۱. «منم خسته شدم. ولی نمی‌تونیم ولش کنیم.»',
                trust: 1,
                next: 'scene20_father'
            },
            {
                label: '۲. «شاید باید کمک بخوایم. از FBI.»',
                stress: -1,
                guilt: 1,
                next: 'scene20_father'
            },
            {
                label: '۳. «قسم خوردم به پدرش. می‌گیرمش.»',
                trust: 2,
                next: 'scene20_father'
            }
        ]
    },

    // ─── صحنه ۲۰: پدر امیلی ───
    scene20_father: {
        location: 'کلانتری — جلوی در — شب',
        text: 'پدر امیلی می‌رسه. داد می‌زنه. گریه می‌کنه. می‌افته رو زمین.',
        dialogue: 'پدر: «گفتم پیداش می‌کنم... تو قول دادی...»',
        choices: [
            {
                label: '۱. «متأسفم.»',
                next: 'scene21_continue'
            },
            {
                label: '۲. سکوت می‌کنم.',
                next: 'scene21_continue'
            },
            {
                label: '۳. «هنوز تموم نشده. قول می‌دم قاتلو بگیرم.»',
                next: 'scene21_continue'
            }
        ],
        onLoad: function() {
            // مقادیر توی choose آپدیت می‌شن
        }
    },

    // ─── پایان موقت ───
    scene21_continue: {
        location: 'نورثبروک — شب — بارون',
        text: 'پرونده ادامه داره. ۴ جنازه. یه قاتل آزاد. یه شهر در آستانهٔ فروپاشی.',
        dialogue: '',
        choices: [
            {
                label: 'ادامه در پارت بعدی...',
                next: 'scene21_continue'
            }
        ]
    }

};

// ─── تابع choose اصلاح شده ───
function choose(index) {
    const scene = story[gameState.currentScene];
    const choice = scene.choices[index];
    
    if (choice.clue) gameState.clues.push(choice.clue);
    if (choice.trust) gameState.trust += choice.trust;
    if (choice.time) gameState.time += choice.time;
    if (choice.stress) gameState.stress += choice.stress;
    if (choice.guilt) gameState.guilt += choice.guilt;
    if (choice.redHerrings) gameState.redHerrings = (gameState.redHerrings || 0) + choice.redHerrings;
    if (choice.magnusFree !== undefined) gameState.magnusFree = choice.magnusFree;
    if (choice.lockArrest) gameState.lockArrest = true;
    
    loadScene(choice.next);
}

// ─── لود اولیه ───
window.onload = function() {
    loadScene('scene1');
};// ─── صحنه ۲۸: ادامه ───
scene28_continue: {
    location: 'نورثبروک — شب',
    text: '۴۸ ساعت وقت داری. FBI تو راهه.',
    dialogue: 'الن: «۴۸ ساعت یعنی هیچی.»',
    choices: [
        {
            label: '۱. «برمی‌گردیم به کلبهٔ جنگل.»',
            next: 'scene29_cabin'
        },
        {
            label: '۲. «آگهی پیدا کردن کیسی مارلو رو تو روزنامه چاپ می‌کنیم.»',
            next: 'scene29_poster'
        }
    ]
},

// ─── صحنه ۲۹: کلبه ───
scene29_cabin: {
    location: 'جنگل لارچ هالو — شب',
    text: 'زیر تخته‌ها یه دسته کلید: «پایانه ۹». می‌ری پایانه. قفسهٔ ۹. طناب. بند. تی‌شرت خون‌آلود.',
    dialogue: 'اسم روی قفسه: مالکوم بریجز. ۶۸ ساله. بازنشسته. پسرش می‌گه: «بابام آرتروز داره. ۵ ساله رانندگی نکرده.» یکی وسایل رو اونجا قایم کرده.',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene30_time_pass'
        }
    ],
    onLoad: function() {
        gameState.clues.push('قفسه مالکوم');
        gameState.stress += 1;
    }
},

// ─── صحنه ۲۹: آگهی ───
scene29_poster: {
    location: 'کلانتری — روز بعد',
    text: 'آگهی چاپ می‌کنی. روزنامه پخش می‌شه. چند تا تماس الکی.',
    dialogue: 'هیچی. کیسی پیدا نمی‌شه. یه هفته وقت تلف کردی.',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene30_time_pass'
        }
    ],
    onLoad: function() {
        gameState.time += 2;
        gameState.stress += 1;
    }
},

// ─── صحنه ۳۰: گذشت زمان ───
scene30_time_pass: {
    location: 'نورثبروک — ۴ ماه بعد',
    text: '۴۸ ساعت تموم شد. FBI رسید. پرونده رو گرفتن ازت. ۴ ماه گذشته. ۴ تا قتل دیگه. FBI کلی آدم رو بازداشت کرده. همه آزاد شدن. قاتل هنوز آزاده.',
    dialogue: 'مأمور FBI میاد پیشت: «۴ ماهه اینجاییم و هیچی. تو این شهر رو می‌شناسی. به کمکت نیاز داریم.»',
    choices: [
        {
            label: '۱. «باشه. باهم کار می‌کنیم.»',
            trust: 1,
            time: 1,
            next: 'scene31_fbi_yes'
        },
        {
            label: '۲. «نه. خودم تنهایی ادامه می‌دم.»',
            guilt: 1,
            stress: 1,
            next: 'scene31_alone'
        }
    ]
},

// ─── صحنه ۳۱: همکاری با FBI ───
scene31_fbi_yes: {
    location: 'دفتر FBI — صبح',
    text: 'با FBI کار می‌کنی. منابع کامل. ولی آزاد نیستی.',
    dialogue: 'الن: «حداقل امکانات داریم.»',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene32_missing_wife'
        }
    ]
},

// ─── صحنه ۳۱: تنهایی ───
scene31_alone: {
    location: 'خیابان‌های پایین شهر — شب',
    text: 'خودت ادامه می‌دی. یه شب یه مرد رو می‌بینی که یه زن رو کتک می‌زنه. مرد فرار می‌کنه. زن فاحشه‌ست. کبود و خونین.',
    dialogue: 'زن: «این مرد قبلاً هم با دخترای دیگه این کارو کرده. یه بار یکی از دخترا گفت با طناب دارش می‌زنه.» اسمش: رابین.',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene32_missing_wife'
        }
    ],
    onLoad: function() {
        gameState.clues.push('رابین — کتک زدن فاحشه‌ها — طناب');
    }
},

// ─── صحنه ۳۲: زن گمشده ───
scene32_missing_wife: {
    location: 'کلانتری — عصر',
    text: 'یه تماس. زنی گم شده. ۳۲ ساله. رفته باشگاه ورزش. برنگشته.',
    dialogue: 'شوهرش: «همسرم رفته ورزش. هر روز می‌ره. امروز برنگشت.» چند روز بعد جنازه پیدا می‌شه. طناب دور گردن. بدون صلیب. شوهرش گریه نمی‌کنه. الن: «این یه چیزی رو قایم می‌کنه.»',
    choices: [
        {
            label: '۱. «می‌رم با همسایه‌هاش حرف می‌زنم.»',
            next: 'scene33_neighbors'
        },
        {
            label: '۲. «میارمش بازجویی. همین الان.»',
            next: 'scene33_interrogate'
        }
    ]
},

// ─── صحنه ۳۳: همسایه‌ها ───
scene33_neighbors: {
    location: 'محلهٔ زن گمشده — عصر',
    text: 'همسایه‌ها می‌گن: «همیشه دعوا داشتن. کتکش می‌زده. پلیس رو هم خبر کردیم. ولی زنش شکایت نمی‌کرد.»',
    dialogue: 'برمی‌گردی کلانتری. یه تماس میاد: کیسی مارلو رو دیدن.',
    choices: [
        {
            label: '۱. «خودم می‌رم دنبال کیسی. بازجویی شوهر رو بده به بیل و مایکل.»',
            next: 'scene34_chase_kicy'
        },
        {
            label: '۲. «قطعاً یه چیزی می‌دونه... ولی کیسی مهم‌تره. الن می‌ره دنبال کیسی، من می‌مونم.»',
            next: 'scene34_stay'
        }
    ],
    onLoad: function() {
        gameState.clues.push('خشونت خانگی');
    }
},

// ─── صحنه ۳۳: بازجویی ───
scene33_interrogate: {
    location: 'کلانتری — اتاق بازجویی — عصر',
    text: 'میاریش. عرق می‌ریزه.',
    dialogue: 'شوهر: «من هیچی نمی‌دونم. من خونه بودم.» دستاش میلرزه. همون موقع یه تماس: کیسی مارلو رو دیدن.',
    choices: [
        {
            label: '۱. «خودم می‌رم دنبال کیسی. بازجویی شوهر رو بده به بیل و مایکل.»',
            next: 'scene34_chase_kicy'
        },
        {
            label: '۲. «قطعاً یه چیزی می‌دونه... ولی کیسی مهم‌تره. الن می‌ره دنبال کیسی، من می‌مونم.»',
            next: 'scene34_stay'
        }
    ],
    onLoad: function() {
        gameState.stress += 1;
    }
},

// ─── صحنه ۳۴: خودم دنبال کیسی ───
scene34_chase_kicy: {
    location: 'کلانتری — ۳ ساعت بعد — شب',
    text: 'می‌ری دنبال کیسی. بازجویی رو بیل و مایکل می‌گیرن. ۳ ساعت بعد برمی‌گردی.',
    dialogue: 'شوهر اعتراف کرده به همه قتل‌ها. ولی صورتش کبوده. کتکش زدن.',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene35_beat_confession'
        }
    ],
    onLoad: function() {
        gameState.stress += 3;
    }
},

// ─── صحنه ۳۴: می‌مونم، الن می‌ره ───
scene34_stay: {
    location: 'کلانتری — اتاق بازجویی — شب',
    text: 'الن می‌ره دنبال کیسی. تو می‌مونی. شوهر رو فشار می‌دی.',
    dialogue: 'یهو گوشیش زنگ می‌خوره. یه پیام: «همه چی طبق برنامه.» کی بهش پیام داده؟',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene35_suspicious_msg'
        }
    ],
    onLoad: function() {
        gameState.clues.push('پیام مشکوک');
    }
},

// ─── صحنه ۳۵: اعتراف با کتک ───
scene35_beat_confession: {
    location: 'کلانتری — شب',
    text: 'شوهر اعتراف کرده. ولی تو می‌دونی زیر شکنجه بوده.',
    dialogue: 'الن: «اگه اعترافش واقعی نباشه، قاتل اصلی آزاده. ولی اگه بفهمن بیل و مایکل کتکش زدن، اخراج می‌شن.»',
    choices: [
        {
            label: '۱. «بیل و مایکل رو لو می‌دم. عدالت مهم‌تره.»',
            trust: 1,
            guilt: 1,
            next: 'scene36_silence'
        },
        {
            label: '۲. «چیزی نمی‌گم. شاید واقعاً قاتل همین باشه.»',
            guilt: 3,
            next: 'scene36_silence'
        }
    ]
},

// ─── صحنه ۳۵: پیام مشکوک ───
scene35_suspicious_msg: {
    location: 'کلانتری — شب',
    text: 'پیام رو نشون الن می‌دی.',
    dialogue: 'الن: «این یعنی یکی دیگه‌ست. شوهر فقط یه تیکه از پازله.» شوهر رو دوباره بازجویی می‌کنی. می‌گه: «نمیدونم کی بود. فقط گفت زنم رو بکشم. گفت اگه نکنی، بچه‌ها رو می‌کشه.»',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene36_silence'
        }
    ]
},

// ─── صحنه ۳۶: ناامیدی ───
scene36_silence: {
    location: 'نورثبروک — ماه‌های بعد',
    text: 'ماه‌ها می‌گذره. هیچ سرنخی به جایی نمی‌رسه. قاتل بعد از نهمین قتل... ساکت می‌شه. یک سال. هیچی.',
    dialogue: 'شهر کم‌کم آروم می‌شه. مردم فکر می‌کنن تموم شده. FBI می‌ره. پرونده سرد می‌شه. اما تو می‌دونی تموم نشده.',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene37_discovery'
        }
    ]
},

// ─── صحنه ۳۷: کشف ۲۰ جسد ───
scene37_discovery: {
    location: 'جلگهٔ اطراف نورثبروک — پاییز',
    text: 'یه کشاورز یه دست از خاک بیرون زده می‌بینه. پلیس می‌ره. سگ‌ها رو میارن. ۲۰ جسد از زیر خاک بیرون میاد.',
    dialogue: 'الن: «جیمی... اینجا فقط یکی نیست...» ۲۰ جسد. با ۹ تای قبلی می‌شه ۲۹ تا. همه زن. قاتل هیچ‌وقت متوقف نشده بود.',
    choices: [
        {
            label: 'ادامه...',
            next: 'scene38_reality'
        }
    ]
},

// ─── صحنه ۳۸: برخورد با واقعیت ───
scene38_reality: {
    location: 'کنار گودال — بارون',
    text: 'کنار گودال وایسادی. بارون می‌باره.',
    dialogue: 'الن کنارته. ساکته.',
    choices: [
        {
            label: '۱. «ما هیچی نبودیم. اون همش جلوتر از ما بود.»',
            guilt: 2,
            stress: 1,
            next: 'scene39_doctor'
        },
        {
            label: '۲. «الان می‌دونیم. حالا وقتشه تمومش کنیم.»',
            trust: 2,
            stress: 1,
            next: 'scene39_doctor'
        },
        {
            label: '۳. چیزی نمی‌گم. فقط نگاه می‌کنم.',
            guilt: 1,
            trust: 1,
            next: 'scene39_doctor'
        }
    ]
},

// ─── صحنه ۳۹: پزشک قانونی ───
scene39_doctor: {
    location: 'پزشک قانونی — ۳ روز بعد',
    text: 'پزشک قانونی: «این اجساد مال ۸ ساله. همه زن. بیشتر فاحشه. ۶ تا ناشناس. صورت داغون یا سر ندارن. طناب ۸ میلی‌متری روی همه.»',
    dialogue: '',
    choices: [
        {
            label: '۱. «۸ سال... ما ۸ سال عقبیم ازش.»',
            stress: 1,
            next: 'scene40_coffee'
        },
        {
            label: '۲. «پس قتل اول نبود. ما فقط اولین رو پیدا کردیم.»',
            guilt: 1,
            next: 'scene40_coffee'
        },
        {
            label: '۳. «این یعنی از اول ما رو بازی می‌داده.»',
            stress: 2,
            next: 'scene40_coffee'
        }
    ]
},

// ─── صحنه ۴۰: قهوه ───
scene40_coffee: {
    location: 'کافه — شب',
    text: 'الن: «بریم کافه یه قهوه بخوریم. فقط یه ساعت.» میرین. قهوه رو می‌ذارن جلو. در باز می‌شه. پدر اِمیلی.',
    dialogue: 'پدر اِمیلی: «بهتون خوش می‌گذره؟ قهوه می‌خورین در حالی که قاتل آزاده؟ دختر من مرده. ۲۹ تا آدم دیگه مردن. لعنت بهتون.» کافه ساکت می‌شه.',
    choices: [
        {
            label: '۱. «حق با شماست.»',
            guilt: 2,
            trust: 1,
            next: 'scene41_continue'
        },
        {
            label: '۲. بلند می‌شم. پول قهوه رو می‌ذارم. می‌رم بیرون.',
            stress: 2,
            guilt: 1,
            next: 'scene41_continue'
        },
        {
            label: '۳. «ما تمام روز سر جنازه‌ها بودیم. یه ساعت استراحت حقمونه.»',
            stress: 3,
            guilt: 1,
            next: 'scene41_continue'
        }
    ]
},

// ─── صحنه ۴۱: ادامه ───
scene41_continue: {
    location: 'نورثبروک — شب',
    text: '',
    dialogue: '',
    choices: [
        {
            label: 'ادامه در پارت بعدی...',
            next: 'scene41_continue'
        }
    ]
}
