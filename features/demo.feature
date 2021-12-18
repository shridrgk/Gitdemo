Feature: I am going to validate calculator app

    @calculatortesting
    Scenario Outline: Calculator add functionality

        Given I Will navigate to "calculator" page
        When  Add two number "<value1>" and "<value2>"
        Then  The output displayed should be "<Sum>"
        Examples:
            | value1 | value2 | Sum |
            | 3      | 5      | 7   |
            | 5      | 5      | 10  |

    @Angulartesting
    Scenario Outline: Validating Angular Page

        Given I Will navigate to "AngularJS" page
        When  I clicked on header page
        And You will naviagte to angular page
        Then Enter "<key>" in search box

        Examples:
            | key   |
            | hello |
            | shri  |
            | kavya |