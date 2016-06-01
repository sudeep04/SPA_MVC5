var module = angular.module("StudentApp", ["ngRoute", "stucontrollers", "sturesources", "pascalprecht.translate"]);

var translationsEN = {
    HEADLINE: 'What an awesome module!',
    PARAGRAPH: 'Srsly!',
    NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
    },
    ID: 'Id',
    FIRSTNAME: 'FirstName',
    LASTNAME: 'LastName',
    AGE:'Age',
    GENDER: 'Gender',
    ACTION: 'Action',
    DELETE: 'Delete',
    FNAME: 'First Name',
    FNAME_ERROR: 'Student FirstName is required',
    LNAME: 'Last Name',
    LNAME_ERROR: 'Provide Last Name for student.',
    AGE_ERROR_REQD: 'Age is required.',
    AGE_ERROR_POSITIVE: 'Age must be a positive number.',
    ADDSTU: 'Add Student',
    BUTTON_LANG_DE: 'German',
    BUTTON_LANG_EN: 'English',
    SEARCH_FIRSTNAME: 'Search by First Name',
    SEARCH_LASTNAME: 'Search by Last Name',
    ORDER_BY: 'Order by : ',
    ASC: 'ascending',
    DSC: 'descending',
    MALE: 'Male',
    FEMALE: 'Female',
    OTHER: 'Other',
    Male: 'Male',
    Female: 'Female',
    Other: 'Other',
    HOME:'Home'

};

var translationsDE = {
    ID: 'Ich würde',
    FIRSTNAME: 'Vorname',
    LASTNAME: 'Nachname',
    AGE: 'Alter',
    GENDER: 'Geschlecht',
    ACTION: 'Aktion',
    DELETE: 'Löschen',
    FNAME: 'Vorname',
    FNAME_ERROR: 'Student Vorname ist erforderlich',
    LNAME: 'Nachname',
    LNAME_ERROR: 'Geben Sie Nachname für Schüler.',
    AGE_ERROR_REQD: 'Alter ist nicht erforderlich.',
    AGE_ERROR_POSITIVE: 'Alter muss eine positive Zahl sein.',
    ADDSTU: 'In Studenten',
    BUTTON_LANG_DE: 'Deutsch',
    BUTTON_LANG_EN: 'Englisch',
    SEARCH_FIRSTNAME: 'Suche nach Vorname',
    SEARCH_LASTNAME: 'Suche nach Nachnamen',
    ORDER_BY: ' Sortieren nach : ',
    ASC: 'aufsteigend',
    DSC: 'absteigend',
    MALE: 'Männlich',
    FEMALE: 'Weiblich',
    OTHER: 'Andere',
    Male: 'Männlich',
    Female: 'Weiblich',
    Other: 'Andere',
    HOME:'xxx'

};

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'GetStudentsList'
    }).
        when('/addstu', {
            templateUrl: 'templates/addstudent.html',
            controller: 'AddStudent'
        }).
        when('/allstu', {
            templateUrl: 'templates/allstudents.html',
            controller: 'AllStudents'
         }).
    otherwise({
        redirectTo: '/home'
    });
}]);

module.config(['$translateProvider', function ($translateProvider) {
    // add translation table
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('de', translationsDE);
    $translateProvider.preferredLanguage('en');
}]);