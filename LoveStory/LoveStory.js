var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"Background"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Background":[["^Long Long ago，在一座漂亮的城堡里，住着一个美丽的公主。","\n","ev","str","^公主喜欢品尝美食。","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^公主喜欢发脾气。","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"Background.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^公主完美无瑕，宛如天堂里的天使。",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"food"},{"#f":5}],"c-1":["\n",{"->":"temper"},{"#f":5}],"c-2":["ev",{"^->":"Background.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"^这样的公主谁遇到了就是谁的幸福啊！那么她是谁呢？","\n",{"->":"greatEnding"},{"#f":5}]}],{"#f":1}],"food":[["^公主喜欢吃","\n",["ev",{"^->":"food.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^薯片",{"->":"$r","var":true},null]}],["ev",{"^->":"food.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^辣条",{"->":"$r","var":true},null]}],["ev",{"^->":"food.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^肯德基",{"->":"$r","var":true},null]}],["ev",{"^->":"food.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^海清凉",{"->":"$r","var":true},null]}],["ev",{"^->":"food.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^冰棒",{"->":"$r","var":true},null]}],"ev","str","^不吃了","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["ev",{"^->":"food.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"eat1"},{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"food.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"eat2"},{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"food.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"eat3"},{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"food.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"eat4"},{"->":".^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"food.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"eat5"},{"->":".^.^.g-0"},{"#f":5}],"c-5":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"fatEnding"},{"#f":5}]}],{"#f":1}],"eat1":[["^格兹格兹，公主吃着嘎嘣脆的薯片，细细的品尝着。","\n","ev","str","^再来一点？","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再吃点其他的？","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ -",{"->":"eat1"},"\n",{"#f":5}],"c-1":["^ -",{"->":"food"},"\n",{"#f":5}]}],{"#f":1}],"eat2":[["^辣条色泽暗红，辣味十足，公主吃的油光满嘴。","\n","ev","str","^再来一点？","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再吃点其他的？","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ -",{"->":"eat2"},"\n",{"#f":5}],"c-1":["^ -",{"->":"food"},"\n",{"#f":5}]}],{"#f":1}],"eat3":[["^一大桶的吮指原味鸡，一大口的汉堡，加上蘸着点点番茄的薯条，那感觉美味极了。","\n","ev","str","^再来一点？","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再吃点其他的？","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ -",{"->":"eat3"},"\n",{"#f":5}],"c-1":["^ -",{"->":"food"},"\n",{"#f":5}]}],{"#f":1}],"eat4":[["^芋圆，黑珍珠，仙草，爆珠，酸奶等等一应俱全，裹满酸奶的海清亮，顺着喉咙流下，冰冰凉凉，美味至极","\n","ev","str","^再来一点？","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再吃点其他的？","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ -",{"->":"eat4"},"\n",{"#f":5}],"c-1":["^ -",{"->":"food"},"\n",{"#f":5}]}],{"#f":1}],"eat5":[["^大雪纷飞的世界里，裹着厚厚的棉袄。一口口嚼着冻牙的冰棒，爽极了。","\n","ev","str","^再来一点？","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再吃点其他的？","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ -",{"->":"eat5"},"\n",{"#f":5}],"c-1":["^ -",{"->":"food"},"\n",{"#f":5}]}],{"#f":1}],"temper":[["^王子呆呆的看着公主，想要知道是因为什么？","\n","ev","str","^告诉王子","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^不告诉她","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"knowWhy"},{"#f":5}],"c-1":["\n",{"->":"notKnow"},{"#f":5}]}],{"#f":1}],"knowWhy":["^王子一把抱住公主，并表明不再惹她生气。","\n",{"->":"loveEnding"},{"#f":1}],"notKnow":["^王子一把抱住公主，带她去吃好吃的，心里想着能让公主开心就好了。","\n",{"->":"food"},{"#f":1}],"fatEnding":["^公主把好吃的给了他的王子。王子高兴的看着她，并喂了她一口。","\n","end",{"#f":1}],"loveEnding":["^公主抱住王子，和他深深的拥吻在了一起。","\n","end",{"#f":1}],"greatEnding":["^这个公主叫做Lilian。她来自中国。她和一位叫做WinterStar的帅气王子在一起了，他们俩互相相爱着，永远也不分开。","\n",{"->":"Background"},"end",{"#f":1}],"#f":1}],"listDefs":{}};