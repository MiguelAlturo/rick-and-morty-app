import { IoRemoveCircle } from "react-icons/io5";
import './filter.scss'
import { useAppDispatch, useAppSelector } from "../../../store";
import { useEffect, useState } from "react";
import { setFilterSpecies, setFilterStatus } from "../../../store/filter/filterSlice";
const filtersSpecies = [
    "Human",
    "Humanoid",
    "Animal",
    "Robot",
    "Alien",
    "Mythological Creature",
    "unknown",
    "Poopybutthole",
    "Cronenberg",
    "Disease"
]

const filterStatus = [
    "Alive", "Dead", "unknown"
]

export const Filter = ({ handleFilter }: { handleFilter: Function }) => {
    const filterState = useAppSelector(state => state.filter.status);
    const filterSpecie = useAppSelector(state => state.filter.specie);
    const dispatch = useAppDispatch()

    const resetFilter = (type: string) => {
        handleFilter({ type, undefined })
        if (type === "status") {
            dispatch(setFilterStatus(""));
        } else {
            dispatch(setFilterSpecies(""));
        }
    }

    const changeSelect = (type: string, value: string) => {
        handleFilter({ type: type, value: value });
    }

    return (
        <div className="filter_section">
            <div>
                <h3>Filtros:</h3>
            </div>
            <div className="filter_section_container">
                <select name="status" value={filterState} onChange={(e) => changeSelect('status', e.target.value)}>
                    <option value="" disabled >Selecciona una estado</option>
                    {filterStatus.map((status) => <option key={status} value={status}>{status === "Alive" ? "Vivo" : status === "Dead" ? "Muerto" : "Desconocido"}</option>)}
                </select>
                {filterState !== "" && <IoRemoveCircle onClick={() => resetFilter('status')} />}
            </div>
            <div className="filter_section_container">
                <select name="specie" value={filterSpecie} onChange={(e) => handleFilter(changeSelect('specie', e.target.value))}>
                    <option value="" disabled >Selecciona una especie</option>
                    {filtersSpecies.map((specie) => <option key={specie} value={specie}>{specie}</option>)}
                </select>
                {filterSpecie !== "" && <IoRemoveCircle onClick={() => resetFilter('specie')} />}
            </div>

        </div >
    )
}
