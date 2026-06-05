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
        dialogue: 'پدر: «یک ماه و نیمه هیچ کاری نکردین! خودم قاتلو پیدا می‌کنم. می‌کشمش.» فرداش رسانه‌ها علیه پلیس می‌شن. مردم خشمگین.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene16_decision'
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
        text: 'مسیر رو با الن بررسی می‌کنی. هیچی نیست. فقط یه دوربین مداربستهٔ خراب روی یه تیر برق.',
        dialogue: 'نگهبان مغازه: «۳ ماهه کار نمی‌کنه.» وقت تلف کردی.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene16_decision'
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
                label: '۲. «کیسی فقط یه پسر فراریه. ربطی به قتل‌ها نداره. وقت تلف نکنیم.»',
                next: 'scene16_decision'
            }
        ]
    },

    // ─── صحنه ۱۶: دنبال کیسی ───
    scene16_chase: {
        location: 'نورثبروک و اطراف — هفته‌های بعد',
        text: 'همه نیرو می‌ره دنبال کیسی مارلو. جنگل. خونه‌های متروکه. پناهگاه‌های قدیمی.',
        dialogue: 'هیچی پیدا نمی‌شه. هفته‌ها می‌گذره. نیروها خسته. پدر اِمیلی عصبانی‌تر. شهر در آستانهٔ انفجاره.',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene17_continue'
            }
        ],
        onLoad: function() {
            gameState.time += 3;
            gameState.stress += 2;
            gameState.redHerrings = (gameState.redHerrings || 0) + 1;
        }
    },

    // ─── صحنه ۱۶: تصمیم بعد از خانواده یا مسیر ───
    scene16_decision: {
        location: 'کلانتری — شب',
        text: 'پدر اِمیلی رسانه‌ها رو خبر کرده. شهر آتیشه.',
        dialogue: 'الن: «باید یه کاری کنیم جیمی.»',
        choices: [
            {
                label: 'ادامه...',
                next: 'scene17_continue'
            }
        ]
    },

    // ─── پایان موقت ───
    scene17_continue: {
        location: 'نورثبروک — شب — بارون',
        text: 'پرونده ادامه داره. اِمیلی هنوز پیدا نشده. شهر در آستانهٔ فروپاشی. قاتل آزاده.',
        dialogue: '',
        choices: [
            {
                label: 'ادامه در پارت بعدی...',
                next: 'scene17_continue'
            }
        ]
    }

};

// ─── لود اولیه ───
window.onload = function() {
    loadScene('scene1');
};
