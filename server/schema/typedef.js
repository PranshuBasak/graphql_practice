const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favouriteMovie: [Movie]
    }
    
    type Movie{
        id: ID!
        name: String!
        releaseDate: Int!
        isInTheaters: Boolean!
    }

    type Query {
        hello: String
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = INDIAN
    }

    input UpdateUserInput{
        id: ID!
        newUsername: String!
        newName: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUserName(input: UpdateUserInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        LEBANESE
        JAPANESE
        INDIAN
        BRAZILIAN
        AMERICAN
        AFGHAN
        ALBANIAN
        ALGERIAN
        ANDORRAN
        ANGOLAN
        ANTIGUANS
        ARGENTINEAN
        ARMENIAN
        AUSTRALIAN
        AUSTRIAN
        AZERBAIJANI
        BAHAMIAN
        BAHRAINI
        BANGLADESHI
        BARBADIAN
        BARBUDANS
        BATSWANA
        BELARUSIAN
        BELGIAN
        BELIZEAN
        BENINESE
        BHUTANESE
        BOLIVIAN
        BOSNIAN
        BRITISH
        BRUNEIAN
        BULGARIAN
        BURKINABE
        BURMESE
        BURUNDIAN
        CAMBODIAN
        CAMEROONIAN
        CANADIAN
        CAPE VERDEAN
        CENTRAL AFRICAN
        CHADIAN
        CHILEAN
        CHINESE
        COLOMBIAN
        COMORAN
        CONGOLESE
        COSTA RICAN
        CROATIAN
        CUBAN
        CYPRIOT
        CZECH
        DANISH
        DJIBOUTI
        DOMINICAN
        DUTCH
        EAST TIMORESE
        ECUADOREAN
        EGYPTIAN
        EMIRIAN
        EQUATORIAL
        ERITREAN
        ESTONIAN
        ETHIOPIAN
        FIJIAN
        FILIPINO
        FINNISH
        FRENCH
        GABONESE
        GAMBIAN
        GEORGIAN
        GERMAN
        GHANAIAN
        GREEK
        GRENADIAN
        GUATEMALAN
        GUINEAN
        GUYANESE
        HAITIAN
        HERZEGOVINIAN
        HONDURAN
        HUNGARIAN
        ICELANDER
        INDONESIAN
        IRANIAN
        IRAQI
        IRISH
        ISRAELI
        ITALIAN
        IVORIAN
        JAMAICAN
        JORDANIAN
        KAZAKHSTANI
        KENYAN
        KITTIAN AND NEVISIAN
        KUWAITI
        KYRGYZ
        LAOTIAN
        LATVIAN
        LIBERIAN
        LIBYAN
        LIECHTENSTEINER
        LITHUANIAN
        LUXEMBOURGER
        MACEDONIAN
        MALAGASY
        MALAWIAN
        MALAYSIAN
        MALDIVAN
        MALIAN
        MALTESE
        MARSHALLESE
        MAURITANIAN
        MAURITIAN
        MEXICAN
        MICRONESIAN
        MOLDOVAN
        MONACAN
        MONGOLIAN
        MOROCCAN
        MOSOTHO
        MOTSWANA
        MOZAMBICAN
        NAMIBIAN
        NAURUAN
        NEPALESE
        NEW ZEALANDER
        NICARAGUAN
        NIGERIEN
        NIGERIAN
        NORTH KOREAN
        NORWEGIAN
        OMANI
        PAKISTANI
        PALAUAN
        PANAMANIAN
        PARAGUAYAN
        PERUVIAN
        POLISH
        PORTUGUESE
        PUERTO_RICAN
        QATARI
        ROMANIAN
        RUSSIAN
        RWANDAN
        SAINT LUCIAN
        SALVADORAN
        SAMOAN
        SAN MARINESE
        SAO TOMEAN
        SAUDI
        SCOTTISH
        SENEGALESE
        SERBIAN
        SEYCHELLOIS
        SIERRA LEONEAN
        SINGAPOREAN
        SLOVAKIAN
        SLOVENIAN
        SOLOMON ISLANDER
        SOMALI
        SOUTH_KOREA
        SPANISH
        SRI LANKAN
        SUDANESE
        SURINAMER
        SWAZI
        SWEDISH
        SWISS
        SYRIAN
        TAIWANESE
        TAJIK
        TANZANIAN
        THAI
        TOGOLESE
        TONGAN
        TRINIDADIAN OR TOBAGONIAN
        TUNISIAN
        TURKISH
        TUVALUAN
        UGANDAN
        UKRAINIAN
        URUGUAYAN
        UZBEK
        VATICAN CITY
        VENEZUELAN
        VIETNAMESE
        WELSH
        YEMENITE
        ZAMBIAN
        ZIMBABWEAN
    }
`

module.exports = { typeDefs };