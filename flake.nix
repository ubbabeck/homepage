{
  description = "Development environment for this project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } (
      { lib, ... }:
      {
        systems = lib.systems.flakeExposed;
        imports = [
          inputs.treefmt-nix.flakeModule
          ./nix/treefmt.nix
        ];
        perSystem =
          { pkgs, ... }:
          {
            packages.default = pkgs.mkShell {
              packages = [
                pkgs.bashInteractive
                pkgs.pnpm
                pkgs.python3
                pkgs.nodejs
                pkgs.prettier
                pkgs.ffmpeg
              ];
            };
          };
      }
    );
}
