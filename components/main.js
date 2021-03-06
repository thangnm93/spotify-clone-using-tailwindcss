import Header from "./header";
import MainSection from "./main-section";
import faker from "faker";

const dataImages = [
  "https://i.scdn.co/image/ab67616d00004851d7e333a4c32373b1fe797373",
  "https://i.scdn.co/image/ab67616d0000b27395a7890d5e1150643f29067d",
  "https://i.scdn.co/image/ab67616d0000b273b9a57eeeb9a9a40134e2cc80",
  "https://i.scdn.co/image/ab67616d0000b273787172d1d35762b4b30aba19",
  "https://lineup-images.scdn.co/wrapped-2020-top100_DEFAULT-en.jpg",
  "https://i.scdn.co/image/ab67706f00000002eee1365954b35d0def7bb1b5",
  "https://i.scdn.co/image/ab67616d0000b27395a7890d5e1150643f29067d",
  "https://i.scdn.co/image/ab67616d0000b273b9a57eeeb9a9a40134e2cc80",
  "https://i.scdn.co/image/ab67616d0000b273787172d1d35762b4b30aba19",
  "https://lineup-images.scdn.co/wrapped-2020-top100_DEFAULT-en.jpg",
  "https://i.scdn.co/image/ab67706f00000002eee1365954b35d0def7bb1b5",
  "https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4",
  "https://i.scdn.co/image/93873a02a9ca1a6542a3026e7c3f10a8c1c0ce41",
  "https://i.scdn.co/image/779fe58f591d9b93bd0db7ff60d3b247d95cb190",
  "https://i.scdn.co/image/ab6765630000ba8aa60bd5c1e094977b0937eae1",
  "https://i.scdn.co/image/a36c400204eb4c24d6f9a1b1158b8cb8c48893a3",
  "https://i.scdn.co/image/cd640e718f5feb917f7bca1cb7922a4542b9925f",
  "https://i.scdn.co/image/8d3dbb16654d115ded0aad0db6a8bf55c0b9959a",
  "https://i.scdn.co/image/ab6765630000ba8ac987f0d5b04823730081046c",
  "https://i.scdn.co/image/ab6765630000ba8a10692ddba65537780700faa9",
  "https://i.scdn.co/image/ab67706f00000002eee1365954b35d0def7bb1b5",
  "https://i.scdn.co/image/ab67706f00000002fe0099a8dcd3054706ffc92f",
  "https://i.scdn.co/image/ab67706f0000000223f3caaaa5f8bc79a8d92710",
  "https://i.scdn.co/image/ab67706f00000002d8d473fcf275f04f49e59552",
  "https://i.scdn.co/image/ab67706f00000002a088a35ef6e638c42f88deda",
  "https://i.scdn.co/image/ab67706f000000025b36ad6edf78aba7a355e1cf",
  "https://i.scdn.co/image/ab67706f00000002fba3e945b4fc3e196f9efd7f",
  "https://i.scdn.co/image/ab67706f00000002bc42ba887b3369b48d4265af",
  "https://i.scdn.co/image/ab67706f00000002136380a2498089b7ead3122c",
  "https://i.scdn.co/image/ab67706f000000026cac5751f488923a32f4ee79",
  "https://thisis-images.scdn.co/37i9dQZF1DZ06evO03rHJm-default.jpg",
  "https://i.scdn.co/image/ab67706f0000000251f5801c7cfb289e9e6fe7b9",
  "https://i.scdn.co/image/ab67706f00000002949aa3369ba5565ddffc37d8",
  "https://i.scdn.co/image/ab67706f00000002a9ed0ea662353c3f30dd277a",
  "https://i.scdn.co/image/ab67706f00000002496c54b5eb3e07b6c3238b1c",
  "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0wZmve-default.jpg",
  "https://i.scdn.co/image/ab67706f00000002b2bc9f0c80fda89b7222f8cb",
  "https://i.scdn.co/image/ab67706f00000002a088a35ef6e638c42f88deda",
  "https://i.scdn.co/image/ab67706f0000000299d30d1fed5d487ff54420f9",
  "https://i.scdn.co/image/ab67706f000000025b36ad6edf78aba7a355e1cf",
  "https://i.scdn.co/image/ab67706f00000002441bd43bc1ad4dcd41c0b183",
  "https://i.scdn.co/image/ab67706f000000021593bd76299d0858f9c69fcf",
  "https://i.scdn.co/image/ab67706f00000002fba3e945b4fc3e196f9efd7f",
  "https://i.scdn.co/image/ab67706f0000000241199a00187c675f103e6239",
  "https://i.scdn.co/image/ab67706f00000002194e62197788bcbd737a07a2",
  "https://i.scdn.co/image/ab67706f000000028663be06e69f49628cf83a56",
  "https://i.scdn.co/image/ab67706f00000002f89497ba4c185a68c8395807",
  "https://i.scdn.co/image/ab67706f000000028b84bcf93333298ce1531447",
  "https://i.scdn.co/image/ab67706f0000000268598c28ca08564dfd07a0be",
  "https://i.scdn.co/image/ab67706f0000000227d0ea32c66ecbe7bcf1c384",
  "https://i.scdn.co/image/ab67706f00000002075cd59f9c026fd732ed9d71",
  "https://i.scdn.co/image/ab67706f000000024b069c78d4a772d877159c23",
  "https://i.scdn.co/image/ab67706f000000027152be4d033e961d5521a7d5",
  "https://i.scdn.co/image/ab67706f00000002878d3512126cb6f25e80bc31",
  "https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af",
  "https://i.scdn.co/image/ab67706f00000002314724fc7ca36a4fce2f1b6a",
  "https://i.scdn.co/image/ab67706f000000027dc2a0fb4bfe0d07294f685e",
  "https://i.scdn.co/image/ab67706f000000027e7d4311695c33ff9f92cd53",
  "https://i.scdn.co/image/ab67706f0000000247cd5a0f1c493c1f809cdeec",
  "https://i.scdn.co/image/ab67706f00000002c06efdb2e0feede51799e037",
  "https://i.scdn.co/image/ab67706f000000026f3abe535ab4abc36cedfcf8",
  "https://i.scdn.co/image/ab67706f0000000276a3e06aaf57c33ac79b94c0",
  "https://i.scdn.co/image/ab67706f00000002fd076b5e9bdffcd1929c7290",
  "https://i.scdn.co/image/ab67706f00000002adede38d73e13f7eff1726de",
  "https://lineup-images.scdn.co/your-top-songs-2019_DEFAULT-en.jpg",
  "https://lineup-images.scdn.co/your-top-songs-2018_DEFAULT-en.jpg",
  "https://i.scdn.co/image/ab67706f00000002ce15ef5d178305ffc51e454e",
  "https://i.scdn.co/image/ab67706f00000002bc42ba887b3369b48d4265af",
  "https://i.scdn.co/image/ab67706f00000002327359f2359a81279a38e7ce",
  "https://i.scdn.co/image/ab67706f00000002706bb2e74cd93ca29d03f4c9",
  "https://i.scdn.co/image/ab67706f00000002bc8fe8c1f68c1141c6b8d24f",
  "https://i.scdn.co/image/ab67706f00000002c39ea435cdd6aa2851f6b03b",
  "https://i.scdn.co/image/ab67706f00000002e4df2b9306cf46cc1d4f2794",
  "https://i.scdn.co/image/ab67706f000000029a64ee9c992c3f1a0d5017fd",
  "https://i.scdn.co/image/ab67706f0000000209eec532a1a213bc950dff71",
  "https://i.scdn.co/image/ab67706f00000002e90bb6612cfbd77d87343ac2",
  "https://i.scdn.co/image/ab67706f00000002377cd62f388e2de7c3b2b08c",
  "https://i.scdn.co/image/ab67706f000000029a64ee9c992c3f1a0d5017fd",
  "https://i.scdn.co/image/ab67706f000000026e9e12914e2dd3015a6b9455",
  "https://i.scdn.co/image/ab67706f000000025a373cf8fffdfe43821efbf6",
  "https://i.scdn.co/image/ab67706f000000027f6ba13514eeb67bec15fe45",
  "https://i.scdn.co/image/ab67706f00000002bd72a7743466e5619860fa78",
  "https://i.scdn.co/image/ab67706f0000000244974902f0d4e2f4613bc3b0",
  "https://i.scdn.co/image/ab67706f000000022dfe9a3c0ab4081e730b54cb",
  "https://i.scdn.co/image/ab67706f000000023c4643a161ed81fd644f9a0e",
  "https://i.scdn.co/image/ab67706f00000002a0771224543218ad74dc1c7b",
  "https://i.scdn.co/image/ab67706f000000029cc6891dbc9b7292361bd673",
  "https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15",
  "https://i.scdn.co/image/ab67706f00000002bbf7afae234cf3c684ec7b4f",
  "https://i.scdn.co/image/ab67706f00000002122921a072ad2ca9ce90a456",
  "https://i.scdn.co/image/ab67706f00000002c36f26730b007e2d54e0b337",
  "https://i.scdn.co/image/ab67706f000000025de49a1d6e08007ab7dbd927",
  "https://i.scdn.co/image/ab67706f0000000227492b763e63a7bd014dde02",
  "https://i.scdn.co/image/ab67706f000000028663be06e69f49628cf83a56",
  "https://i.scdn.co/image/ab67706f0000000218ab3d0a44406352d14a9d55",
  "https://i.scdn.co/image/ab67706f00000002ca64210a23622427ec19c4a6",
  "https://i.scdn.co/image/ab67706f0000000291208168c4d7591ce5c87651",
  "https://i.scdn.co/image/ab67706f00000002b62d29eb9739a628c285112d",
  "https://i.scdn.co/image/ab67706f00000002eebd0beae4ccda853e8c2f60",
  "https://i.scdn.co/image/ab67706f00000002ba77a2166a7b66e9a300ffaa",
  "https://i.scdn.co/image/ab67706f00000002706bb2e74cd93ca29d03f4c9",
  "https://i.scdn.co/image/ab67706f00000002e4df2b9306cf46cc1d4f2794",
  "https://i.scdn.co/image/ab67706f00000002c39ea435cdd6aa2851f6b03b",
  "https://i.scdn.co/image/ab67706f000000029a64ee9c992c3f1a0d5017fd",
  "https://i.scdn.co/image/ab67706f0000000297e64120ffd2caa39d434de3",
  "https://i.scdn.co/image/ab67616d0000b2737015d34ce589cfe720224b50",
  "https://i.scdn.co/image/ab67616d0000b27322649d2993c39a8710fafd63",
  "https://i.scdn.co/image/ab67616d0000b2739c8bcb14d6f29a01b2586469",
  "https://i.scdn.co/image/ab67706f00000002b8e0fbf20f4a5e90b0802db7",
  "https://i.scdn.co/image/ab67706f0000000255b6190507cb8cb94f1d6834",
  "https://i.scdn.co/image/ab67706f00000002bc8fe8c1f68c1141c6b8d24f",
  "https://i.scdn.co/image/ab67706f00000002e58261ea1db17e7a11299640",
  "https://i.scdn.co/image/ab67706f000000029a64ee9c992c3f1a0d5017fd",
  "https://i.scdn.co/image/ab67616d0000b273af8734a7c1521bedd570a469",
  "https://i.scdn.co/image/ab67616d0000b27304af297074d3b755f769f4b1",
  "https://i.scdn.co/image/ab67616d0000b273e4c94092518788223b1362a7",
  "https://i.scdn.co/image/ab67706f00000002ffa215be1a4c64e3cbf59d1e",
  "https://i.scdn.co/image/ab67706f0000000275c5caa75c0a54430b68acd4",
  "https://i.scdn.co/image/ab67706f00000002074df78decb501362b189497",
  "https://i.scdn.co/image/ab67706f0000000232df9bff74a89e816f4cbeea",
  "https://i.scdn.co/image/ab67706f00000002fd076b5e9bdffcd1929c7290",
  "https://i.scdn.co/image/ab67706f00000002a019090ff288b5a4aacac170",
  "https://i.scdn.co/image/ab67706f000000021b84822d2ae33438903454df",
  "https://i.scdn.co/image/ab67706f0000000299178e0c08af10970ed231bf",
  "https://i.scdn.co/image/ab67706f00000002a85470d54b1b7388fbd7f5ba",
  "https://i.scdn.co/image/ab67706f0000000278f249b04775eacd0e80df48",
  "https://i.scdn.co/image/ab67706f0000000249b19a59627d0e7340cf3b04",
  "https://i.scdn.co/image/ab67706f00000002f13fa0fc064e13e467b91826",
  "https://i.scdn.co/image/ab67706f000000023056e8ae7a8ef9c9d5f83d0f",
  "https://i.scdn.co/image/ab67706f000000025237273821950d68729b5223",
  "https://i.scdn.co/image/ab67706f0000000267d8d77ad8ee9dd04f34aa5d",
  "https://i.scdn.co/image/ab67706f0000000296d9b4b6b0b9e90fb5b34283",
  "https://i.scdn.co/image/ab67706f000000020e20350a7e01866d7c959834",
  "https://i.scdn.co/image/ab67706f00000002470dd505fcf08e4693db9b24",
  "https://i.scdn.co/image/ab67706f00000002fba3e945b4fc3e196f9efd7f",
  "https://i.scdn.co/image/ab67706f00000002a199868f05d89ed696519bb4",
  "https://i.scdn.co/image/ab67706f00000002f87c07aa00a8f07bb4239079",
  "https://i.scdn.co/image/ab67706f0000000227f587773e2d64e729332cb0",
  "https://i.scdn.co/image/ab67706f0000000241dd5cdb625a3f7fb09fcfce",
  "https://i.scdn.co/image/ab67706f00000002fae58fa52adaad0a5d3a618f",
  "https://i.scdn.co/image/ab67616d0000b27354f90bb37c316c173c7a1cb7",
  "https://i.scdn.co/image/ab67706f0000000289713e7e7639dd0eae95d9d4",
  "https://i.scdn.co/image/ab67706f000000029cc6891dbc9b7292361bd673",
];
const dataTitles = [
  "House",
  "Replay",
  "TOGETHER",
  "Masker The Third",
  "Drown (feat. Clinton Kane) [Alle Farben Remix]",
  "Liked Songs",
  "Your Top Songs 2020",
  "Cardio",
  "Daniel Robinsone",
  "The Joe Rogan Experience",
  "Daddy Goljan Lectures",
  "Snacks Daily",
  "The Rewatchables",
  "How I Built This with Guy Raz",
  "NPR News Now",
  "Pardon My Take",
  "The Bill Simmons Podcast",
  "The Ramsey Show",
  "Daily Mix 1",
  "Daily Mix 2",
  "Daily Mix 3",
  "Daily Mix 4",
  "Daily Mix 5",
  "Release Radar",
  "Discover Weekly",
  "Family Mix",
  "Cardio",
  "Happy Beats",
  "Remix Hits",
  "Energy Booster: Dance",
  "Motivation Mix",
  "Dance Hits of 2019",
  "Dance Pop Hits",
  "EDM Samplings",
  "Mike Williams Radio",
  "This Is Avicii",
  "This Is Martin Garrix",
  "This Is Vicetone",
  "This Is Alan Walker",
  "This Is Armin van Buuren",
  "This Is Hardwell",
  "This Is Ti??sto",
  "This Is Above &amp; Beyond",
  "This Is Charlie Puth",
  "Motivation Mix",
  "Chilled Dance Hits",
  "Dance Hits of 2019",
  "Written By Ina Wroldsen",
  "Ultra Gaming",
  "Dance Pop Hits",
  "What's Cooking?",
  "Tropical House",
  "The Party Hits of the 2010s",
  "CLASS OF 2021 mixtape",
  "Lorem",
  "Soir??e",
  "Teen Beats",
  "park hangs",
  "Anti Pop",
  "Fresh Finds",
  "Top Gaming Tracks",
  "Heart Beats",
  "Good Vibes",
  "A Perfect Day",
  "It's ALT Good!",
  "Good People Good Music",
  "Happy Folk",
  "Groove Theory",
  "Classic Road Trip Songs",
  "Sunny Day",
  "Your Time Capsule",
  "On Repeat",
  "Repeat Rewind",
  "Your Summer Rewind",
  "Liked Songs",
  "Your Top Songs 2019",
  "Your Top Songs 2018",
  "SLAP!",
  "EDM Samplings",
  "Martin Garrix Radio",
  "Headliners",
  "Big Room Dance",
  "Dance Hits of 2015",
  "Dance Hits of 2017",
  "Dance Hits of 2018",
  "Instrumental Dance Hits",
  "Night Rider",
  "ALPHA 9 Radio",
  "Chill Tracks",
  "Dance Classics",
  "Instrumental Dance Hits",
  "Deep Study",
  "Trance Mission",
  "Trance Classics",
  "Melodic &amp; Euphoric",
  "Workout Beats",
  "Powerwalk!",
  "Beast Mode Dance",
  "Power Hour",
  "Workout",
  "Beast Mode",
  "Fast Pop Run",
  "Hype",
  "Run Wild",
  "Top Hits of 2018",
  "10 Summers You Won't Forget",
  "The Party Hits of the 2010s",
  "All Out 10s",
  "Hit Rewind",
  "Most Streamed Songs of the Decade",
  "Top Tracks of 2019",
  "US Summer Hits of the 10s",
  "Best of the Decade For You",
  "KSHMR Radio",
  "Big Room Dance",
  "Dance Hits of 2018",
  "Dance Hits of 2017",
  "Instrumental Dance Hits",
  "Hardstyle Bangers",
  "Blow",
  "Parade",
  "Fireflies (feat. Luciana)",
  "Third Party Radio",
  "Dance Hits of 2014",
  "Dance Hits of 2013",
  "Dance Hits of 2015",
  "Dance Hits of 2012",
  "Instrumental Dance Hits",
  "Heartbeat (Nicky Romero Edit)",
  "Left Behinds",
  "Payback",
  "Songs to Sing in the Car",
  "Pop Drive",
  "Happy Drive",
  "Country Drive",
  "Classic Road Trip Songs",
  "Classic Rock Drive",
  "70s Road Trip",
  "Hip-Hop Drive",
  "Daily Drive",
  "Party Like It's 2018",
  "Party Like It's 2017",
  "Party Like It's 2014",
  "Party Like It's 2015",
  "10s Party",
  "Party Like It's 2013",
  "Party Like It's 2016",
  "Party Like It's 2019",
  "Party Like It's 2012",
  "Dance Party",
  "Dance Pop Hits",
  "Fresh Dance Pop",
  "Dance Covers",
  "Dance Hits",
  "Pop Remix",
  "Party Hits",
  "Avicii Radio",
  "Forever Yours (Avicii Tribute)",
  "Songs to Sing in the Shower",
  "Workout",
];
const dataDescriptions = [
  "Third Party",
  "Artist",
  "Martin Garrix, Clinton Kane, Alle Farben",
  "The songs you loved most this year, all wrapped up.",
  "Joe Rogan",
  "Dr. Ed Goljan",
  "Robinhood Financial, LLC",
  "The Ringer & Bill Simmons",
  "NPR",
  "NPR",
  "Barstool Sports",
  "The Ringer & Bill Simmons",
  "Ramsey Network",
  "Avicii, PARTYNEXTDOOR, Taylor Swift and more",
  "Third Party, Martin Garrix, Jay Hardway and more",
  "Above & Beyond, Andrew Rayel, Chicane and more",
  "Armin van Buuren, ARTY, Sunny Lax and more",
  "S??n T??ng M-TP, Hoang Thuy Linh, Trinh Thang Binh and more",
  "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.",
  "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
  "Introducing Family Mix: Listen together with the people on your Family Plan",
  "Upbeat dance pop to keep your heart pumping.",
  "Feel-good dance music!",
  "Remixed hits from the last 15 years.",
  "Need to get your energy level up? This will help!",
  "Uplifting and energetic music that helps you stay motivated.",
  "Floor fillers and big streamers of 2019.",
  "Hit the dance floor with your favorite bops!",
  "Create the new vibe by mixing in the retro sounds.",
  "By Spotify",
  "Thank you Avicii. Your music will live on forever.",
  "The essential tracks by the Dutch DJ and producer.",
  "This is Vicetone. The essential tracks, all in one playlist.",
  "The essential Alan Walker tracks and remixes.",
  "This Is the best of Armin van Buuren.",
  "Hardwell's essential originals and remixes.",
  "Ti??sto's best songs, remixes and compilations.",
  "This is Above & Beyond. The essential tracks, all in one playlist.",
  "Pay 'Attention' to what the Puthinators are up to here.",
  "Uplifting and energetic music that helps you stay motivated.",
  "The softer side of dance.",
  "Floor fillers and big streamers of 2019.",
  "Written By Ina Wroldsen. The essential songs, all in one playlist. Learn more here.",
  "Dance, Bass, EDM: the perfect gaming mix.",
  "Hit the dance floor with your favorite bops!",
  "Dish out your favourite tunes here",
  "Take down the tempo but keep the party going with the biggest tropical house jams.",
  "Party like it???s one of the years between 2010-2019.",
  "The Class of 2021's very own time capsule: a nostalgic look back on the past four years.\n\n",
  "Indie, pop, and everything in between to bring you good energy and good vibes. ",
  "????Willow???? adds blink, MCR, avril, cudi and the anxiety to Lorem this week",
  "when you give an indie kid the aux.... ",
  "No cap, we love to hear it. Cover: Bella Poarch\n",
  "grab a blanket and get the good vibes going",
  "ur one stop shop, baby. featuring new music by AG Club",
  "The best new music from independent artists and labels. Updates every Wednesday.  Cover: Squidgenini, Artwork: Isu Kim",
  "The tracks that gamers love.",
  "Dance music for the heart <3",
  "Set it off with these epic anthems. Only good vibes here!",
  "Timeless melodies from your favourite artists, both old and new.",
  "ALT the Good Vibes.",
  "Great songs from great people.  Enjoy music from artists you can believe in!",
  "Brighten your day with a folksy mix of mood boosters!",
  "A feel-good soulful house  and disco selection.",
  "The ultimate playlist to fuel your good mood while on the road.",
  "Easy listening soft pop hits for a pleasant day.",
  "We made you a personalized playlist with songs to take you back in time.",
  "Songs you love right now",
  "Your past favorites",
  "Time for Your Summer Rewind! We???ve made you a new playlist featuring your old summer favorites.",
  "",
  "The songs you loved most this year, all wrapped up.",
  "The songs you loved most this year, all wrapped up.",
  "When the bassline slaps.",
  "Create the new vibe by mixing in the retro sounds.",
  "By Spotify",
  "Nostalgic dance festival favourites from the 2010s.",
  "Big rooms and big sounds. Cover: Quintino",
  "Floor fillers and big streamers of 2015.",
  "Floor fillers and big streamers of 2017.",
  "Floor fillers and big streamers of 2018.",
  "Big dance tracks with no vocals. Cover: Martin Garrix.",
  "Dark & moody progressive house & electronic on the late night highway.",
  "By Spotify",
  "Softer kinda dance.",
  "Dance radio hits from the 90s and 00s!",
  "Big dance tracks with no vocals. Cover: Martin Garrix.",
  "Deep beats to study to.",
  "Setting sights on banging trance and progressive with Ilan Bluestone.",
  "Lasers, lights & euphoric beats - all your favorite trance anthems!",
  "Come alive with this progressive & melodic house selection.",
  "Need to break a sweat? Turn these jams up and stay motivated!",
  "Fuel your powerwalk with these upbeat and uplifting tracks.",
  "Dance tracks for a big workout.",
  "Tap it back or go for a spin with these uptempo tracks!",
  "Pop hits to keep your workout fresh.",
  "Get your beast mode on!",
  "Catchy pop music to keep those legs going.",
  "Aggressive trap and bass for the gym.",
  "Uplifting and uptempo indie folk and roots rock, guaranteed to open your stride.",
  "Rewind and rediscover big songs of 2018. Cover: Post Malone.",
  "This decade???s summers are over, but the music is neverending.",
  "Party like it???s one of the years between 2010-2019.",
  "The biggest songs of the 2010s.",
  "Listen to all the tracks you've been missing. Cover: The Weeknd",
  "Top streaming songs from each year in the 10s.",
  "The most streamed songs globally on Spotify in 2019.",
  "Songs from the last decade that will make you sing and dance all summer long!",
  "A few of the many great songs from the past 10 years in a playlist tuned for you.",
  "By Spotify",
  "Big rooms and big sounds. Cover: Quintino",
  "Floor fillers and big streamers of 2018.",
  "Floor fillers and big streamers of 2017.",
  "Big dance tracks with no vocals. Cover: Martin Garrix.",
  "Only the biggest Hardstyle",
  "Yves V, Marc Benjamin",
  "VINAI",
  "Bassjackers",
  "By Spotify",
  "Floor fillers and big streamers of 2014.",
  "Floor fillers and big streamers of 2013.",
  "Floor fillers and big streamers of 2015.",
  "Floor fillers and big streamers of 2012.",
  "Big dance tracks with no vocals. Cover: Martin Garrix.",
  "Magnificence, Alec Maire, Nicky Romero",
  "Paris Blohm, Taylr Renee",
  "Dimitri Vangelis & Wyman, Steve Angello",
  "Sing along and enjoy the drive...",
  "Breeze through your commute with these pop favorites.",
  "Let your favorite music guide you through your daily commute! Cover: P!nk",
  "Country music to accompany your commute. Cover: Gabby Barrett",
  "The ultimate playlist to fuel your good mood while on the road.",
  "Classic rock to get your motor running.",
  "Hit the road to the soundtrack of these seventies classics.",
  "Drive slow homie.",
  "A mix of news and music made for you",
  "The songs that made us sing and dance in 2018.",
  "The songs that made us sing and dance in 2017.",
  "The songs that made us sing and dance in 2014.",
  "The songs that made us sing and dance in 2015.",
  "The biggest party hits of the 2010s. Cover: Pitbull.",
  "The songs that made us sing and dance in 2013.",
  "The songs that made us sing and dance in 2016.",
  "The songs that made us sing and dance in 2019.",
  "The songs that made us sing and dance in 2012.",
  "Move your feet!",
  "Hit the dance floor with your favorite bops!",
  "The hottest new pop with the all the drops. Cover: Cheat Codes",
  "New takes on old classics!",
  "All the big ones with Riton, Nightcrawlers, Mufasa & Hypeman.",
  "Remixed pop and dance collabs. Cover: Griff.",
  "A mix of the biggest pop, dance, and hip hop hits. ",
  "By Spotify",
  "Kygo, Avicii, Sandro Cavazza",
  "Make your shower more uplifting by singing along to these hits.",
  "Pop hits to keep your workout fresh.",
];
const dataMainSections = [
  {
    title: "Recently played",
    description: "",
    url: false,
  },
  {
    title: "Shows to try",
    description: "Podcasts we think you???ll get hooked on.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Made for you",
    description: "Get better recommendations the more you listen.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "More like Mike Williams",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Best of artists",
    description: "Bringing together the top songs from an artist.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Happy",
    description: "Music that makes you feel good.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Class of 2021",
    description: "Bringing together the top songs from an artist.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "More of what you like",
    description: "Hear a little bit of everything you love.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Class of 2021",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Uniquely yours",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "More like Martin Garrix",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Workout",
    description: "Music to keep you motivated.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Throwback",
    description: "Playlists full of favorites, still going strong.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "More like ALPHA 9",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "More like KSHMR",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "More like Hardwell",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "For today???s drive",
    description: "A mix of music and podcasts to get you through your commute.",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Throwback party: 10s",
    description: "",
    url: { href: "#", title: "SEE ALL" },
  },
  {
    title: "Sad",
    description: "Music for dark days.",
    url: { href: "#", title: "SEE ALL" },
  },
];

function getRandomIndex() {
  const min = 0;
  const max = dataImages.length;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDescription() {
  let description = dataDescriptions[getRandomIndex()];
  if (description.length < 10) {
    description += "By ";
  }
  return description;
}

function getRenderData() {
  return [
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
    {
      image: dataImages[getRandomIndex()],
      title: dataTitles[getRandomIndex()],
      description: getDescription(),
      color: faker.internet.color(),
    },
  ];
}

export default function Main() {
  return (
    <>
      <div className="overflow-y-auto scrollbar w-full h-screen text-gray-200">
        <div className="flex flex-col">
          <Header data={getRenderData()} />
        </div>
        <div className="flex flex-row bg-bg-main">
          <div className="w-full lg:w-5/6 flex flex-col py-6 px-4 lg:px-9 pb-28">
            {dataMainSections.map((section, index) => {
              return (
                <MainSection
                  key={index}
                  title={section.title}
                  description={section.description}
                  url={section.url}
                  data={getRenderData()}
                />
              );
            })}
          </div>
          <div className="hidden lg:block lg:w-1/6 pr-9 py-6">
            <div className="flex items-center justify-between pb-9">
              <span>Friend Activity</span>
              <a href="#">
                <svg
                  className="w-9 h-9 stroke-current rounded-full hover:bg-gray-50 hover:bg-opacity-30 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <a href="#">
                  <img
                    className="w-full rounded-full border border-gray-700"
                    src="https://images.unsplash.com/photo-1614548142166-160eed2f0777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80"
                  />
                </a>
                <div className="flex flex-col w-full ml-3">
                  <div className="flex flex-row justify-between mr-4">
                    <span className="text-sm">Spotify User</span>
                    <span className="text-xs text-gray-400">14 gi???</span>
                  </div>
                  <span className="text-xs text-gray-400">Your Playlist</span>
                  <span className="text-xs text-gray-400">Album</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <a href="#">
                  <img
                    className="w-full rounded-full border border-gray-700"
                    src="https://images.unsplash.com/photo-1614548142166-160eed2f0777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80"
                  />
                </a>
                <div className="flex flex-col w-full ml-3">
                  <div className="flex flex-row justify-between mr-4">
                    <span className="text-sm">Spotify User</span>
                    <span className="text-xs text-gray-400">14 gi???</span>
                  </div>
                  <span className="text-xs text-gray-400">Your Playlist</span>
                  <span className="text-xs text-gray-400">Album</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <a href="#">
                  <img
                    className="w-full rounded-full border border-gray-700"
                    src="https://images.unsplash.com/photo-1614548142166-160eed2f0777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80"
                  />
                </a>
                <div className="flex flex-col w-full ml-3">
                  <div className="flex flex-row justify-between mr-4">
                    <span className="text-sm">Spotify User</span>
                    <span className="text-xs text-gray-400">14 gi???</span>
                  </div>
                  <span className="text-xs text-gray-400">Your Playlist</span>
                  <span className="text-xs text-gray-400">Album</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
