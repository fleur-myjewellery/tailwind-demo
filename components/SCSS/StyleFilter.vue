<template>
    <div class="stylefilter">
        <div class="stylefilter__title">
            <h1>
                Select and Find your matches
            </h1>
            <p>
                Ontdek alle items passend bij jouw style
            </p>
        </div>
        <div class="stylefilter__button-container">
            <SCSSButton title="Stoer" />
            <SCSSButton title="Vrouwelijk" />
            <SCSSButton title="Stijlvol" />
            <SCSSButton title="Basic" />
        </div>
        <div class="stylefilter__end">
            <p>
                Ontdek je style doe onze stijltest
            </p>
        </div>
    </div>
</template>
<style lang="scss">
.stylefilter {
    width: 100%;
    background-color: var(--background-gray);
    padding: 1.5rem 3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 1.5rem;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }

    &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
    }

    &__end {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
