StartupEvents.registry('block', (e) => {
    //撤锁
    /**
     * @param {string} name -字符串
     * @param {string} displayName -字符串
     */
    function toilet(name, displayName) {
        e.create(name)
            .model('kubejs:block/' + name)
            .stoneSoundType()
            .color(0, 0x47311A)
            .hardness(3.0)
            .resistance(15.0)
            .requiresTool(true)
            .renderType('solid')
            .tagBlock('mineable/pickaxe')
            .tagBlock('poopsky:toilet')
            .item(e => e.color(0, 0x47311A))
            .displayName(displayName);
    }
    toilet('toilet_block', 'Toilet');
    toilet('white_concrete_toilet', 'White Concrete Toilet');
    toilet('light_gray_concrete_toilet', 'Light Gray Concrete Toilet');
    toilet('gray_concrete_toilet', 'Gray Concrete Toilet');
    toilet('black_concrete_toilet', 'Black Concrete Toilet');
    toilet('brown_concrete_toilet', 'Brown Concrete Toilet');
    toilet('red_concrete_toilet', 'Red Concrete Toilet');
    toilet('orange_concrete_toilet', 'Orange Concrete Toilet');
    toilet('yellow_concrete_toilet', 'Yellow Concrete Toilet');
    toilet('lime_concrete_toilet', 'Lime Concrete Toilet');
    toilet('green_concrete_toilet', 'Green Concrete Toilet');
    toilet('cyan_concrete_toilet', 'Cyan Concrete Toilet');
    toilet('light_blue_concrete_toilet', 'Light Blue Concrete Toilet');
    toilet('blue_concrete_toilet', 'Blue Concrete Toilet');
    toilet('purple_concrete_toilet', 'Purple Concrete Toilet');
    toilet('magenta_concrete_toilet', 'Magenta Concrete Toilet');
    toilet('pink_concrete_toilet', 'Pink Concrete Toilet');
    toilet('rainbow_concrete_toilet', 'Rainbow Concrete Toilet');

    //粪块
    e.create('manure_block')
        .model('kubejs:block/manure_block')
        .soundType('mud')
        .hardness(.1)
        .resistance(0.0)
        .tagBlock('minecraft:mineable/hoe')
        .displayName('Manure Block');
    //粪楼梯
    e.create('manure_stairs', 'stairs')
        .soundType('mud')
        .hardness(.1)
        .resistance(0.0)
        .tagBlock('minecraft:mineable/hoe')
        .displayName('Manure Stairs');
    //粪半砖
    e.create('manure_slab', 'slab')
        .model('kubejs:block/manure_slab')
        .soundType('mud')
        .hardness(.1)
        .resistance(0.0)
        .tagBlock('minecraft:mineable/hoe')
        .displayName('Manure Slab');
    //粪墙
    e.create('manure_wall', 'wall')
        .soundType('mud')
        .hardness(.1)
        .resistance(0.0)
        .tagBlock('minecraft:mineable/hoe')
        .displayName('Manure Wall');
    //粪栅栏门
    e.create('manure_fence_gate', 'fence_gate')
        .soundType('mud')
        .hardness(.1)
        .resistance(0.0)
        .tagBlock('minecraft:mineable/hoe')
        .displayName('Manure Fence Gate');
})