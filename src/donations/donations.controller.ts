import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";

@Controller("donation")
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationsService.create(createDonationDto);
  }

  @Get()
  findAll() {
    return this.donationsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.donationsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: number,
    @Body() updateDonationDto: UpdateDonationDto
  ) {
    return this.donationsService.update(id, updateDonationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.donationsService.remove(id);
  }
}
