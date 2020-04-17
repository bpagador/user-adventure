const hunger = {
    id: 'hunger',
    title: 'A Hungry Tamagotchi Appears',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'hunger.png',
    description: `
        You visit your beloved virtual pet, Bucket, and they're famished! 
        Or so they say...you've been fooled before. That Bucket, they sure do love to eat. 
        How much food is enough food?
    `,
    choices: [{
        id: 'one-serving',
        description: 'You know, the yewsh.',
        result: `
            Having known Bucket since the day they were born, you assess that the usual amount
            of food is plenty. They have a little tantrum! Oh, Bucket...They lose 5 Happiness points 
            but ultimately gain 10 Wellness points because Mom is always right. 
        `,
        happiness: -5,
        wellness: 10
    }, {
        id: 'heaping-serving',
        description: 'Ok, ok, they can have a little extra than usual.',
        result: `
            Being a sucker for your baby Bucket, you give in and serve them much more than is wise. Having 
            pulled on your heart strings and knowing perfectly well they can get away with murder, Bucket
            relishes in his victory. But hark! A gigantic poop fest ensues and a gnarly bellyache to boot. 
            Bucket loses 10 Wellness points. 
        `,
        happiness: 0,
        wellness: -10
    }, {
        id: 'no-food',
        description: 'None for the Glutoneous Bucket!',
        result: `
            You recall having fed Bucket not long ago. That's right, less than an hour ago! You opt for 
            a delicious little treat instead. Nothing fancy, just some strawberry pixels to tide them 
            over, Bucket's favorite. They're as happy as a clam, Bucket gains 15 Happiness points!
        `,
        happiness: 15,
        wellness: 0
    }]
};

const love = {
    id: 'love',
    title: 'Matters of the Heart',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'love.png',
    description: `
        Bucket needs love, too! Lately, they're been very demanding of your attention. You think it
        a byproduct of spending a little more time working and not enough time devoting yourself to 
        loving on Bucket. You feel a little bad, but there is such a thing as tough love, and if we don't
        push our Tamagotchis out of the nest, will they ever be able to servive in the real world? 
        You choose to:
    `,
    choices: [{
        id: 'give-in',
        description: 'Give in, life is short, hold your digital pets close.',
        result: `
            You spend the next hour hugging and kissing Bucket so much, you feel the tears errupting from 
            your very eyes. Bucket is very thrilled at first. But an hour of hugging kissing is way too much. 
            Bucket yells, "Chill, mom!" and you stop dead in your tracks. Bucket's first rebellion, ::sigh:: they
            grow up so fast. Fighting sucks, Bucket loses 10 Happiness points but gains 10 Wellness points for
            beginning the work of self-reliance. 
        `,
        happiness: -10,
        wellness: 10
    }, {
        id: 'gentle-reminder',
        description: 'Show them enough love to know you still care',
        result: `
            A gentle reminder that you are still there, something quick and simple: a big ole hug. Little did you know
            that Bucket had a big fight with their best friend this morning. They really needed you today and your tough
            love didn't help any. Bucket really needed their mommy! They lose 15 Happiness points. You really screwed
            up this one. 
        `,
        happiness: -15,
        wellness: 0
    }, {
        id: 'serious-talk',
        description: 'Have a long, thoughtful chat about what is really going on',
        result: `
            Raising tamagotchis can be tough. Growing up ain't easy. You decide it's time for a real talk and call Bucket
            into the console with a box of pixelated tissues on hand and ask them to share their heart with you. They spill it
            like never before, a harsh retelling of pain and betrayal, drama and stress. No wonder they've been needing you 
            around so much. The release of emotion helps Bucket tremendously and reinforces your bond. They gain 20 points of
            mental wellness. 
        `,
        happiness: 0,
        wellness: 20
    }]
};

const outing = {
    id: 'outing',
    title: 'A Cabin Fevered Bucket',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'outing.png',
    description: `
        Tamagotchis need space to move, they can't be boxed into their pixelated den forever. They've complained about this 
        before. "Nobody puts Bucket in the corner!" This, they've yelled at you before, many times. Such a little diva. Springtime is 
        here after all, maybe it's time you obliged. But, ugh, those nasty allergies that haunt Bucket day and night... 
        Is it worth it? Let them work it? What to do?
    `,
    choices: [{
        id: 'quick-stroll',
        description: 'Take a quick stroll.',
        result: `
            The outing is enough to nourish Bucket and fulfill their need for fresh air and sunlight, but not enough to send them into
            a hayfever frenzy. Buckets returns home itch-free but remains pensive all the same. "Am I the genie in the bottle?," they wonder. 
            10 points for Wellness but the questions remains, what is it all for?
            `,
        happiness: 0,
        wellness: 10
    }, {
        id: 'buns-out',
        description: 'Suns out, buns out, baby--time to lay on the grass all day',
        result: `
            Bucket is happy as a clam to be soaking up that spring sun, bring on the good times! Or so they think...30 minutes after
            rolling around in the park, Bucket breaks out in hives. Burn, baby, burn, springtime inferno! Knowing you'll have to take 
            them home soon for an oatmeal bath, you both commisurate on the beauty of the season despite the pain inevitably attached to it. 
            25 Happiness points for Bucket and all humankind. 
        `,
        happiness: 25,
        wellness: 0
    }, {
        id: 'stay-in',
        description: 'Bucket could get very sick! Best to be cautious and stay in.',
        result: `
            Bucket is terribly disappointed. They scream and huff and puff and you ultimately decide to let them sit on the porch. A tiny 
            consolation, but knowing Bucket well enough, you understand it isn't enough. You offer them some ice cream pixels as a peace offering. 
            Just enough to boost the spirit, but definitely not enough to keep Bucket of sound mind. They scream into a pillow and end up crying
            the whole night. The crying is so bad it dehydrates them and Bucket loses 10 Wellness points. 
        `,
        happiness: 5,
        wellness: 10
    }]
};

const quests = [
    hunger, 
    love,
    outing, 
];

export default quests;