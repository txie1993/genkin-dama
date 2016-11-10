# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "Guest", password:"password")
User.create(username: "PewPewU", password:"ppuFilth")
User.create(username: "SFAT", password:"theJVB")
User.create(username: "Chillin", password:"ogMyBGuy")
User.create(username: "Zhu", password:"WomboCombo")
User.create(username: "Phil", password:"AintFalco")
User.create(username: "HMW", password:"OOOHHH")
User.create(username: "Fox", password:"drillshine")
User.create(username: "Falco", password:"uptiltbair")
User.create(username: "Marth", password:"chaingrab")
User.create(username: "Sheik", password:"techchase")
User.create(username: "Peach", password:"turnip")
User.create(username: "Jigglypuff", password:"bairrest")
User.create(username: "IceClimbers", password:"wobble")
User.create(username: "CFalcon", password:"stompknee")
User.create(username: "Luigi", password:"wavedash")
User.create(username: "Mario", password:"mangoScorp")
User.create(username: "SoulOfCinder", password:"Cinder")
User.create(username: "Artorias", password:"SifSif")
User.create(username: "AbyssWatchers", password:"Farron")
User.create(username: "PPMD", password:"Kreygasm")
User.create(username: "mang0", password:"mangoW")
User.create(username: "Armada", password:"Stitch")
User.create(username: "Hungrybox", password:"ledgecamp")
User.create(username: "Leffen", password:"zipboys")
User.create(username: "Mew2King", password:"lolm2k")
User.create(username: "Plup", password:"shielddrop")
User.create(username: "Axe", password:"tailspike")
User.create(username: "Westballz", password:"blipblip")
User.create(username: "Shroomed", password:"upsmash")
User.create(username: "Aldrich", password:"Gwyndolin")
User.create(username: "Goku", password:"SSJGSSJ")

Project.create(creator_id: 21, title: "Save the Whales", image_url: "http://animal-dream.com/data_images/whale/whale7.jpg", funding_goal: 20000, end_date: "2017-11-30", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 22, title: "Robot Assistant", image_url: "http://gratisography.com/pictures/330_1.jpg", funding_goal: 1500000, end_date: "2018-16-30", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 23, title: "Romeo and Juliet in Space", image_url: "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=", funding_goal: 5000, end_date: "2017-01-30", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 24, title: "Super Smash Bros Melee HD", image_url: "http://pre12.deviantart.net/f467/th/pre/i/2015/113/c/3/the_melee_gods___character_wallpaper_by_moxie2d-d8qtp15.jpg", funding_goal: 201010, end_date: "2017-5-15", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 25, title: "Restore Van Gogh's Ear", image_url: "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxODExNDQwMTQx.jpg", funding_goal: 123456, end_date: "2017-6-10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 26, title: "Wireless Book Phone Charger", image_url: "https://images.unsplash.com/photo-1476490490574-93b86dc78e62?dpr=1&auto=format&fit=crop&w=1500&h=1126&q=80&cs=tinysrgb&crop=", funding_goal: 8500, end_date: "2017-10-23", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 27, title: "Scrapbook My Trip", image_url: "https://images.unsplash.com/photo-1470074558764-4e577e98bc85?dpr=1&auto=compress,format&fit=crop&w=1199&h=1499&q=80&cs=tinysrgb&crop=", funding_goal: 1000, end_date: "2017-01-16", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 29, title: "Write a Book", image_url: "https://images.unsplash.com/photo-1471971027640-fd67d042fe6f?dpr=1&auto=format&fit=crop&w=1500&h=1500&q=80&cs=tinysrgb&crop=", funding_goal: 2500, end_date: "2016-12-25", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Project.create(creator_id: 28, title: "Build Drangleic Castle", image_url: "https://images.unsplash.com/photo-1456389208733-756d6c29e717?dpr=1&auto=format&fit=crop&w=1500&h=998&q=80&cs=tinysrgb&crop=", funding_goal: 1000000000, end_date: "2019-1-25", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")


Project.create(creator_id: 32, title: "Beat Frieza", image_url: "http://vignette1.wikia.nocookie.net/dragonball/images/2/2d/GokuSpiritBombFrieza02.png/revision/latest?cb=20100203100108", funding_goal: 80000, end_date: "2020-02-20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")



Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 1, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 1, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 1, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton Save the Whales t-shirt.", project_id: 1, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a coffee mug.", project_id: 1, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a life-size whale plush.", project_id: 1, amount: 300)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 2, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 2, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 2, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton Robot Whales t-shirt.", project_id: 2, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a coffee mug.", project_id: 2, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a custom plush of your robot.", project_id: 2, amount: 200)
Reward.create(name: "Ultimate Package", description: "All of the above, plus battle capabilities on your robot.", project_id: 2, amount: 500)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 3, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 3, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 3, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton RJiS t-shirt.", project_id: 3, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus admission to our first performance.", project_id: 3, amount: 200)
Reward.create(name: "Supreme Package", description: "All of the above, plus a stage prop.", project_id: 3, amount: 500)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 4, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 4, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 4, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton Melee HD t-shirt.", project_id: 4, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a custom controller.", project_id: 4, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, and you can become Fox in real life.", project_id: 4, amount: 300)

Reward.create(name: "Thanks", description: "Our earfelt thanks for your contribution.", project_id: 5, amount: 1)
Reward.create(name: "Eary Delight", description: "We'll send you a rubber replica of the ear.", project_id: 5, amount: 5)
Reward.create(name: "Care Package", description: "We'll send you a personalized care package to appreciate your support.", project_id: 5, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton Starry Night t-shirt.", project_id: 5, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a coffee mug.", project_id: 5, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a 4-foot ear plush.", project_id: 5, amount: 300)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 6, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 6, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 6, amount: 10)
Reward.create(name: "Custom Book", description: "Print the book with whatever text you want.", project_id: 6, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a coffee mug.", project_id: 6, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a life-size book plush that also doubles as a wireless electric vehicle charger.", project_id: 6, amount: 300)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 7, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 7, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 7, amount: 10)
Reward.create(name: "T-Shirt", description: "I'll send you a sweaty t-shirt from my trip.", project_id: 7, amount: 50)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 8, amount: 1)
Reward.create(name: "Name In Credits", description: "We'll put your name in the credits to remember your help.", project_id: 8, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 8, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton book t-shirt.", project_id: 8, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus your book may or may not charge your phone.", project_id: 8, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a life-size book plush.", project_id: 8, amount: 300)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 9, amount: 1)
Reward.create(name: "Name In Stone", description: "We'll put your name in the foundation stone to remember your help.", project_id: 9, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 9, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton Vendrick and Aldia t-shirt.", project_id: 9, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a coffee mug.", project_id: 9, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a life-size Vendrick plush.", project_id: 9, amount: 300)

Reward.create(name: "Thanks", description: "Our heartfelt thanks for your contribution.", project_id: 10, amount: 1)
Reward.create(name: "Free Hug", description: "I'll hug you if we ever meet.", project_id: 10, amount: 5)
Reward.create(name: "Personal Email", description: "We'll send you a personalized email to appreciate your support.", project_id: 10, amount: 10)
Reward.create(name: "T-Shirt", description: "A limited-edition, all-cotton Spirit Bomb t-shirt.", project_id: 10, amount: 25)
Reward.create(name: "Deluxe Package", description: "All of the above, plus a coffee mug.", project_id: 10, amount: 100)
Reward.create(name: "Supreme Package", description: "All of the above, plus a life-size Goku plush.", project_id: 10, amount: 300)

Rewarding.create(user_id: 1, reward_id: 1)
Rewarding.create(user_id: 1, reward_id: 2)
Rewarding.create(user_id: 1, reward_id: 3)
Rewarding.create(user_id: 1, reward_id: 4)
Rewarding.create(user_id: 2, reward_id: 6)
Rewarding.create(user_id: 3, reward_id: 6)
Rewarding.create(user_id: 4, reward_id: 6)
Rewarding.create(user_id: 5, reward_id: 6)
Rewarding.create(user_id: 5, reward_id: 7)
Rewarding.create(user_id: 5, reward_id: 8)
Rewarding.create(user_id: 5, reward_id: 9)
Rewarding.create(user_id: 5, reward_id: 10)

Backing.create(project_id: 1, backer_id: 1, amount: 100)
Backing.create(project_id: 1, backer_id: 11, amount: 100)
Backing.create(project_id: 1, backer_id: 12, amount: 100)
Backing.create(project_id: 1, backer_id: 13, amount: 100)
Backing.create(project_id: 1, backer_id: 14, amount: 100)
Backing.create(project_id: 1, backer_id: 15, amount: 100)
Backing.create(project_id: 1, backer_id: 16, amount: 100)
Backing.create(project_id: 1, backer_id: 17, amount: 100)
Backing.create(project_id: 1, backer_id: 18, amount: 100)
Backing.create(project_id: 1, backer_id: 19, amount: 100)
Backing.create(project_id: 1, backer_id: 20, amount: 100)
Backing.create(project_id: 2, backer_id: 2, amount: 1000)
Backing.create(project_id: 3, backer_id: 3, amount: 33)
Backing.create(project_id: 4, backer_id: 4, amount: 25)
Backing.create(project_id: 5, backer_id: 5, amount: 300)
Backing.create(project_id: 6, backer_id: 6, amount: 100)
Backing.create(project_id: 7, backer_id: 7, amount: 103)
Backing.create(project_id: 8, backer_id: 8, amount: 322)
Backing.create(project_id: 9, backer_id: 9, amount: 1337)
Backing.create(project_id: 10, backer_id: 10, amount: 5)
Backing.create(project_id: 1, backer_id: 10, amount: 100)
Backing.create(project_id: 2, backer_id: 9, amount: 1000)
Backing.create(project_id: 3, backer_id: 8, amount: 33)
Backing.create(project_id: 4, backer_id: 7, amount: 25)
Backing.create(project_id: 5, backer_id: 6, amount: 300)
Backing.create(project_id: 6, backer_id: 5, amount: 100)
Backing.create(project_id: 7, backer_id: 4, amount: 103)
Backing.create(project_id: 8, backer_id: 3, amount: 322)
Backing.create(project_id: 9, backer_id: 2, amount: 1337)
Backing.create(project_id: 10, backer_id: 1, amount: 5)
Backing.create(project_id: 5, backer_id: 1, amount: 100)
Backing.create(project_id: 6, backer_id: 2, amount: 1000)
Backing.create(project_id: 7, backer_id: 3, amount: 33)
Backing.create(project_id: 8, backer_id: 4, amount: 25)
Backing.create(project_id: 9, backer_id: 5, amount: 300)
Backing.create(project_id: 10, backer_id: 6, amount: 100)
Backing.create(project_id: 1, backer_id: 7, amount: 103)
Backing.create(project_id: 2, backer_id: 8, amount: 322)
Backing.create(project_id: 3, backer_id: 9, amount: 1337)
Backing.create(project_id: 4, backer_id: 10, amount: 5)
Backing.create(project_id: 5, backer_id: 10, amount: 100)
Backing.create(project_id: 6, backer_id: 9, amount: 1000)
Backing.create(project_id: 7, backer_id: 8, amount: 33)
Backing.create(project_id: 8, backer_id: 7, amount: 25)
Backing.create(project_id: 9, backer_id: 6, amount: 300)
Backing.create(project_id: 10, backer_id: 5, amount: 100)
Backing.create(project_id: 1, backer_id: 4, amount: 103)
Backing.create(project_id: 2, backer_id: 3, amount: 322)
Backing.create(project_id: 3, backer_id: 2, amount: 1337)
Backing.create(project_id: 4, backer_id: 1, amount: 5)

Tag.create(name: "Art")
Tag.create(name: "Comics")
Tag.create(name: "Crafts")
Tag.create(name: "Dance")
Tag.create(name: "Design")
Tag.create(name: "Fashion")
Tag.create(name: "Film")
Tag.create(name: "Food")
Tag.create(name: "Games")
Tag.create(name: "Journalism")
Tag.create(name: "Music")
Tag.create(name: "Photography")
Tag.create(name: "Publishing")
Tag.create(name: "Technology")
Tag.create(name: "Theater")
