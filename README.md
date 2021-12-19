# @jocular/time
<br/>

The two main utility classes are:

1. [Instant](https://github.com/ofekdeitch/time#instant)
2. [Duration](https://github.com/ofekdeitch/time#duration)
<br/>

## Installing

Using npm:
```bash
$ npm install @jocular/time
```

Using yarn:
```bash
$ yarn add @jocular/time
```

<br/>


## Instant

Instant is an extention of JavaScript's native Date class.<br/>
It provides some additional functionalities which we find quite handy.
<br/>

#### add

Adds a certain amount of time to an Instant:

```ts
const now = Instant.get()
const oneHourFromNow = now.add(Duration.hours(1))
const oneDayFromNow = now.add(Duration.days(1))
```
<br/>

#### reduce

Recudes a certain amount of time from an Instant:

```ts
const now = Instant.get()
const oneHourBeforeNow = now.reduce(Duration.hours(1))
const oneDayBeforeNow = now.reduce(Duration.days(1))
```
<br/>

#### isBefore

Checks whether an instant precedes another instant:

```ts
const now = Instant.get()
const tomorrow = now.add(Duration.days(1))
const yesterday = now.reduce(Duration.days(1))

now.isBefore(tomorrow) // true
now.isBefore(yesterday) // false
```
<br/>

#### isAfter

Checks whether an instant follows another instant:

```ts
const now = Instant.get()
const tomorrow = now.add(Duration.days(1))
const yesterday = now.reduce(Duration.days(1))

now.isAfter(tomorrow) // false
now.isAfter(yesterday) // true
```
<br/>

#### diff

Calculates the difference between two instances:

```ts
const now = Instant.get()
const tomorrow = now.add(Duration.days(1))

const diff = now.diff(tomorrow) // Duration.days(1)
```
<br/>

## Duration

Duration is an object representing a certain _amount_ of time (or a timestamp).<br/>
It could be milliseconds, seconds, minutes, hours, days, etc.<br/>

Creating a Duration object:

```ts
const oneMillisecond = Duration.milliseconds(1)
const oneSecond = Duration.seconds(1)
const oneMinute = Duration.minutes(1)
const oneHour = Duration.hours(1)
const oneDay = Duration.days(1)
const oneWeek = Duration.weeks(1)
const oneMonth = Duration.months(1)
const oneYear = Duration.years(1)
```

**Note:**<br/>
Due to the inconsistent way in which time is represented, there might be some inconsistencies in our API.<br/>
For instance, a month is represented internally as 30 days, but we as humans consider a year to be both 12 months and 365 days.
<br/>
<br/>

### toMilliseconds

Calculates the amount of millisecond in a given Duration object:

```ts
const threeSeconds = Duration.seconds(3)

threeSeconds.toMilliseconds() // 3000
```
<br/>


### toSeconds

Calculates the amount of seconds in a given Duration object:

```ts
const fiveSeconds = Duration.milliseconds(5000)

fiveSeconds.toSeconds() // 5
```

And with a fraction:

```ts
const oneAndAHalfSeconds = Duration.milliseconds(1500)

oneAndAHalfSeconds.toSeconds() // 1.5
```
<br/>




### toMinutes

Calculates the amount of minutes in a given Duration object:

```ts
const tenMinutes = Duration.seconds(600)

tenMinutes.toMinutes() // 10
```

And with a fraction:


```ts
const thirtySeconds = Duration.seconds(30)

thirtySeconds.toMinutes() // 0.5
```
<br/>

### toHours

Calculates the amount of hours in a given Duration object:

```ts
const twoHours = Duration.minutes(120)

twoHours.toHours() // 2
```

And with a fraction:


```ts
const halfAnHour = Duration.minutes(30)

halfAnHour.toHours() // 0.5
```
<br/>

### toDays

Calculates the amount of days in a given Duration object:

```ts
const oneDay = Duration.hours(24)

oneDay.toDays() // 1
```

And with a fraction:


```ts
const halfADay = Duration.hours(12)

halfADay.toHours() // 0.5
```
<br/>

### toWeeks

Calculates the amount of weeks in a given Duration object:

```ts
const twoWeeks = Duration.days(14)

twoWeeks.toWeeks() // 2
```
<br/>

### toMonths

Calculates the amount of months in a given Duration object:

```ts
const threeMonths = Duration.days(90)

threeMonths.toMonths() // 3
```
<br/>

### toYears

Calculates the amount of years in a given Duration object:

```ts
const oneYear = Duration.days(365)

oneYear.toYears() // 1
```
<br/>

### add

Creates a new Duration object that represents the sum of a given Duration object and another Duration object:

```ts
const oneHour = Duration.hours(1)
const twentyMinutes = Duration.minutes(20)

const oneHourAndTwentyMinutes = oneHour.add(twentyMinutes)

```
<br/>

### reduce

Creates a new Duration object that represents a given Duration object reduced by another Duration object:

```ts
const oneHour = Duration.hours(1)
const twentyMinutes = Duration.minutes(20)

const fortyMinutes = oneHour.reduce(twentyMinutes)

```
<br/>

### deconstruct

Deconstructs a given Duration object into the extact amount of years, months, days, hours, minutes, etc. it consists of.<br/>
This function comes in handy when formatting a Duration object:

```ts

const ninetyMinutes = Duration.minutes(90)
const { hours, minutes } = ninetyMinutes.deconstruct()

console.log(`${hours} hours, ${minutes} minutes`) // 1 hours, 30 minutes

```
or:
```ts

const fiftyHours = Duration.hours(50)
const { days, hours } = fiftyHours.deconstruct()

console.log(`${days} days, ${hours} hours`) // 2 days, 2 hours

```
**Note:**<br/>
The common use case in which we would deconstruct a Duration object is when formatting it.<br/>
Since in most cases we will use only years, months, days, hours, minutes, seconds (and sometimes milliseconds), we are by default returning a number of weeks of 0, and counting these within the number of days.<br/>
For example `Duration.weeks(1).deconstruct()` should return 0 weeks and 7 days.
<br/>
<br/>

