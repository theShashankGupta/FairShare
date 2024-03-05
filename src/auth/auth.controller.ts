import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/createUserDto.dto';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refersh-jwt-auth.guard';
import { RefreshJwtStrategy } from './strategies/refresh-jwt-strategy';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req) {
    // console.log(req);
    return await this.authService.login(req);
  }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refrshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
